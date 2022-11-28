import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OpsEntityItem } from "./opsentityitem";



// OpsEntity
/** 
 * The result of the query.
**/
export class OpsEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Data", elemType: OpsEntityItem })
  data?: Map<string, OpsEntityItem>;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;
}
