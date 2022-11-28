import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsIamAccessKeySessionContext } from "./awsiamaccesskeysessioncontext";
import { AwsIamAccessKeyStatusEnum } from "./awsiamaccesskeystatusenum";



// AwsIamAccessKeyDetails
/** 
 * IAM access key details related to a finding.
**/
export class AwsIamAccessKeyDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessKeyId" })
  accessKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedAt" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=PrincipalId" })
  principalId?: string;

  @SpeakeasyMetadata({ data: "json, name=PrincipalName" })
  principalName?: string;

  @SpeakeasyMetadata({ data: "json, name=PrincipalType" })
  principalType?: string;

  @SpeakeasyMetadata({ data: "json, name=SessionContext" })
  sessionContext?: AwsIamAccessKeySessionContext;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: AwsIamAccessKeyStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=UserName" })
  userName?: string;
}
