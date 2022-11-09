import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsIamPolicyVersion
/** 
 * A version of an IAM policy.
**/
export class AwsIamPolicyVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreateDate" })
  createDate?: string;

  @Metadata({ data: "json, name=IsDefaultVersion" })
  isDefaultVersion?: boolean;

  @Metadata({ data: "json, name=VersionId" })
  versionId?: string;
}
