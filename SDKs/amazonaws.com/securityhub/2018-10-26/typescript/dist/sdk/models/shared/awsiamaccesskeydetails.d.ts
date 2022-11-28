import { SpeakeasyBase } from "../../../internal/utils";
import { AwsIamAccessKeySessionContext } from "./awsiamaccesskeysessioncontext";
import { AwsIamAccessKeyStatusEnum } from "./awsiamaccesskeystatusenum";
/**
 * IAM access key details related to a finding.
**/
export declare class AwsIamAccessKeyDetails extends SpeakeasyBase {
    accessKeyId?: string;
    accountId?: string;
    createdAt?: string;
    principalId?: string;
    principalName?: string;
    principalType?: string;
    sessionContext?: AwsIamAccessKeySessionContext;
    status?: AwsIamAccessKeyStatusEnum;
    userName?: string;
}
