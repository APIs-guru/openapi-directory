import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the default properties that are used for creating WorkSpaces. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-directory-details.html">Update Directory Details for Your WorkSpaces</a>.
**/
export declare class WorkspaceCreationProperties extends SpeakeasyBase {
    customSecurityGroupId?: string;
    defaultOu?: string;
    enableInternetAccess?: boolean;
    enableMaintenanceMode?: boolean;
    enableWorkDocs?: boolean;
    userEnabledAsLocalAdministrator?: boolean;
}
