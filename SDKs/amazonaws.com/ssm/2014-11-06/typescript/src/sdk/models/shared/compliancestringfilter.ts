import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComplianceQueryOperatorTypeEnum } from "./compliancequeryoperatortypeenum";



// ComplianceStringFilter
/** 
 * One or more filters. Use a filter to return a more specific list of results.
**/
export class ComplianceStringFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: ComplianceQueryOperatorTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Values" })
  values?: string[];
}
