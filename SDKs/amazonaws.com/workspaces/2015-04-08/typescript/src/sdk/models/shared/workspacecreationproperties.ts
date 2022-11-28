import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WorkspaceCreationProperties
/** 
 * Describes the default properties that are used for creating WorkSpaces. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-directory-details.html">Update Directory Details for Your WorkSpaces</a>. 
**/
export class WorkspaceCreationProperties extends SpeakeasyBase {
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
