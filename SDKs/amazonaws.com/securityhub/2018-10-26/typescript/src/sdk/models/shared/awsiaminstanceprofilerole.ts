import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsIamInstanceProfileRole
/** 
 * Information about a role associated with an instance profile.
**/
export class AwsIamInstanceProfileRole extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=AssumeRolePolicyDocument" })
  assumeRolePolicyDocument?: string;

  @Metadata({ data: "json, name=CreateDate" })
  createDate?: string;

  @Metadata({ data: "json, name=Path" })
  path?: string;

  @Metadata({ data: "json, name=RoleId" })
  roleId?: string;

  @Metadata({ data: "json, name=RoleName" })
  roleName?: string;
}
