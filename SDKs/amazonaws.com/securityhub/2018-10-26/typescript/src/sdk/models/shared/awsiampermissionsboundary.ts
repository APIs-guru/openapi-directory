import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsIamPermissionsBoundary
/** 
 * Information about the policy used to set the permissions boundary for an IAM principal.
**/
export class AwsIamPermissionsBoundary extends SpeakeasyBase {
  @Metadata({ data: "json, name=PermissionsBoundaryArn" })
  permissionsBoundaryArn?: string;

  @Metadata({ data: "json, name=PermissionsBoundaryType" })
  permissionsBoundaryType?: string;
}
