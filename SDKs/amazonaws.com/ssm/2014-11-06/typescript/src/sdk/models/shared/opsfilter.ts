import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OpsFilterOperatorTypeEnum } from "./opsfilteroperatortypeenum";


// OpsFilter
/** 
 * A filter for viewing OpsData summaries.
**/
export class OpsFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=Key" })
  key: string;

  @Metadata({ data: "json, name=Type" })
  type?: OpsFilterOperatorTypeEnum;

  @Metadata({ data: "json, name=Values" })
  values: string[];
}
