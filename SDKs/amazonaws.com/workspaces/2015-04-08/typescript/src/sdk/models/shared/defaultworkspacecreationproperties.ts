import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DefaultWorkspaceCreationProperties
/** 
 * Describes the default values that are used to create WorkSpaces. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-directory-details.html">Update Directory Details for Your WorkSpaces</a>.
**/
export class DefaultWorkspaceCreationProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CustomSecurityGroupId" })
  customSecurityGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=DefaultOu" })
  defaultOu?: string;

  @SpeakeasyMetadata({ data: "json, name=EnableInternetAccess" })
  enableInternetAccess?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableMaintenanceMode" })
  enableMaintenanceMode?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableWorkDocs" })
  enableWorkDocs?: boolean;

  @SpeakeasyMetadata({ data: "json, name=UserEnabledAsLocalAdministrator" })
  userEnabledAsLocalAdministrator?: boolean;
}
