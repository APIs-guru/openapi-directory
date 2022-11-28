import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Artist } from "./artist";
import { Entertainment } from "./entertainment";
import { FacetEvent } from "./facetevent";
import { Location } from "./location";
import { SpecificPeople } from "./specificpeople";



export class SearchFacetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=artists", elemType: Artist })
  artists?: Artist[];

  @SpeakeasyMetadata({ data: "json, name=entertainment", elemType: Entertainment })
  entertainment?: Entertainment[];

  @SpeakeasyMetadata({ data: "json, name=events", elemType: FacetEvent })
  events?: FacetEvent[];

  @SpeakeasyMetadata({ data: "json, name=locations", elemType: Location })
  locations?: Location[];

  @SpeakeasyMetadata({ data: "json, name=specific_people", elemType: SpecificPeople })
  specificPeople?: SpecificPeople[];
}
