import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StatusValuesEnum } from "./statusvaluesenum";



// OperationStatusFilter
/** 
 * Filters he operation status list based on the passed attribute value.
**/
export class OperationStatusFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: StatusValuesEnum;
}
