import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PolicyTypeEnum } from "./policytypeenum";


// PolicySummary
/** 
 * Contains information about a policy, but does not include the content. To see the content of a policy, see <a>DescribePolicy</a>.
**/
export class PolicySummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=AwsManaged" })
  awsManaged?: boolean;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Type" })
  type?: PolicyTypeEnum;
}
