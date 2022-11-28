import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EntityDescription } from "./entitydescription";



export class GetEntitiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=descriptions", elemType: EntityDescription })
  descriptions?: EntityDescription[];
}
