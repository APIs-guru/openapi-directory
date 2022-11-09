import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DefaultWorkspaceCreationProperties
/** 
 * Describes the default values that are used to create WorkSpaces. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-directory-details.html">Update Directory Details for Your WorkSpaces</a>.
**/
export class DefaultWorkspaceCreationProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=CustomSecurityGroupId" })
  customSecurityGroupId?: string;

  @Metadata({ data: "json, name=DefaultOu" })
  defaultOu?: string;

  @Metadata({ data: "json, name=EnableInternetAccess" })
  enableInternetAccess?: boolean;

  @Metadata({ data: "json, name=EnableMaintenanceMode" })
  enableMaintenanceMode?: boolean;

  @Metadata({ data: "json, name=EnableWorkDocs" })
  enableWorkDocs?: boolean;

  @Metadata({ data: "json, name=UserEnabledAsLocalAdministrator" })
  userEnabledAsLocalAdministrator?: boolean;
}
