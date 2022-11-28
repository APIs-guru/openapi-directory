import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteFolderPathParams extends SpeakeasyBase {
    folderId: string;
}
export declare class DeleteFolderSecurity extends SpeakeasyBase {
    apiTokenBasic: shared.SchemeApiTokenBasic;
}
export declare class DeleteFolderFolder extends SpeakeasyBase {
    id?: string;
    name?: string;
    parentFolderId?: string;
    path?: string;
}
export declare class DeleteFolderRequest extends SpeakeasyBase {
    pathParams: DeleteFolderPathParams;
    security: DeleteFolderSecurity;
}
export declare class DeleteFolderResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    authenticationError?: shared.AuthenticationError;
    error?: shared.Error;
    folder?: DeleteFolderFolder;
}
