import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AwsIamAccessKeySessionContext } from "./awsiamaccesskeysessioncontext";
import { AwsIamAccessKeyStatusEnum } from "./awsiamaccesskeystatusenum";


// AwsIamAccessKeyDetails
/** 
 * IAM access key details related to a finding.
**/
export class AwsIamAccessKeyDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccessKeyId" })
  accessKeyId?: string;

  @Metadata({ data: "json, name=AccountId" })
  accountId?: string;

  @Metadata({ data: "json, name=CreatedAt" })
  createdAt?: string;

  @Metadata({ data: "json, name=PrincipalId" })
  principalId?: string;

  @Metadata({ data: "json, name=PrincipalName" })
  principalName?: string;

  @Metadata({ data: "json, name=PrincipalType" })
  principalType?: string;

  @Metadata({ data: "json, name=SessionContext" })
  sessionContext?: AwsIamAccessKeySessionContext;

  @Metadata({ data: "json, name=Status" })
  status?: AwsIamAccessKeyStatusEnum;

  @Metadata({ data: "json, name=UserName" })
  userName?: string;
}
