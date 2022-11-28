import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsIamInstanceProfileRole
/** 
 * Information about a role associated with an instance profile.
**/
export class AwsIamInstanceProfileRole extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=AssumeRolePolicyDocument" })
  assumeRolePolicyDocument?: string;

  @SpeakeasyMetadata({ data: "json, name=CreateDate" })
  createDate?: string;

  @SpeakeasyMetadata({ data: "json, name=Path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=RoleId" })
  roleId?: string;

  @SpeakeasyMetadata({ data: "json, name=RoleName" })
  roleName?: string;
}
