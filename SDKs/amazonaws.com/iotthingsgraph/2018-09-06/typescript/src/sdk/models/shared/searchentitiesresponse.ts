import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EntityDescription } from "./entitydescription";



export class SearchEntitiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=descriptions", elemType: EntityDescription })
  descriptions?: EntityDescription[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
