import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OpsFilterOperatorTypeEnum } from "./opsfilteroperatortypeenum";



// OpsFilter
/** 
 * A filter for viewing OpsData summaries.
**/
export class OpsFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: OpsFilterOperatorTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Values" })
  values: string[];
}
