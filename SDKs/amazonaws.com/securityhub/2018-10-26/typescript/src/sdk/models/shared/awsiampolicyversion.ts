import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsIamPolicyVersion
/** 
 * A version of an IAM policy.
**/
export class AwsIamPolicyVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreateDate" })
  createDate?: string;

  @SpeakeasyMetadata({ data: "json, name=IsDefaultVersion" })
  isDefaultVersion?: boolean;

  @SpeakeasyMetadata({ data: "json, name=VersionId" })
  versionId?: string;
}
