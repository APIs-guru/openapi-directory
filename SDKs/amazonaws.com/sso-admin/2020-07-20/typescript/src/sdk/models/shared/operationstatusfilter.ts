import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StatusValuesEnum } from "./statusvaluesenum";


// OperationStatusFilter
/** 
 * Filters he operation status list based on the passed attribute value.
**/
export class OperationStatusFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=Status" })
  status?: StatusValuesEnum;
}
