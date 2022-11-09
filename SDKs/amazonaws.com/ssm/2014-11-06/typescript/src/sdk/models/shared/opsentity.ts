import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OpsEntityItem } from "./opsentityitem";


// OpsEntity
/** 
 * The result of the query.
**/
export class OpsEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=Data", elemType: shared.OpsEntityItem })
  data?: Map<string, OpsEntityItem>;

  @Metadata({ data: "json, name=Id" })
  id?: string;
}
