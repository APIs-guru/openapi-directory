import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyTypeEnum } from "./policytypeenum";
/**
 * Contains information about a policy, but does not include the content. To see the content of a policy, see <a>DescribePolicy</a>.
**/
export declare class PolicySummary extends SpeakeasyBase {
    arn?: string;
    awsManaged?: boolean;
    description?: string;
    id?: string;
    name?: string;
    type?: PolicyTypeEnum;
}
