import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsIamPermissionsBoundary
/** 
 * Information about the policy used to set the permissions boundary for an IAM principal.
**/
export class AwsIamPermissionsBoundary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PermissionsBoundaryArn" })
  permissionsBoundaryArn?: string;

  @SpeakeasyMetadata({ data: "json, name=PermissionsBoundaryType" })
  permissionsBoundaryType?: string;
}
