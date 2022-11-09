import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ComplianceQueryOperatorTypeEnum } from "./compliancequeryoperatortypeenum";


// ComplianceStringFilter
/** 
 * One or more filters. Use a filter to return a more specific list of results.
**/
export class ComplianceStringFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=Key" })
  key?: string;

  @Metadata({ data: "json, name=Type" })
  type?: ComplianceQueryOperatorTypeEnum;

  @Metadata({ data: "json, name=Values" })
  values?: string[];
}
