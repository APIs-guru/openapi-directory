import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Artist } from "./artist";
import { Entertainment } from "./entertainment";
import { FacetEvent } from "./facetevent";
import { Location } from "./location";
import { SpecificPeople } from "./specificpeople";


export class SearchFacetsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=artists", elemType: shared.Artist })
  artists?: Artist[];

  @Metadata({ data: "json, name=entertainment", elemType: shared.Entertainment })
  entertainment?: Entertainment[];

  @Metadata({ data: "json, name=events", elemType: shared.FacetEvent })
  events?: FacetEvent[];

  @Metadata({ data: "json, name=locations", elemType: shared.Location })
  locations?: Location[];

  @Metadata({ data: "json, name=specific_people", elemType: shared.SpecificPeople })
  specificPeople?: SpecificPeople[];
}
