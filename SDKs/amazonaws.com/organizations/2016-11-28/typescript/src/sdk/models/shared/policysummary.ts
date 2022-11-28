import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PolicyTypeEnum } from "./policytypeenum";



// PolicySummary
/** 
 * Contains information about a policy, but does not include the content. To see the content of a policy, see <a>DescribePolicy</a>.
**/
export class PolicySummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=AwsManaged" })
  awsManaged?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: PolicyTypeEnum;
}
