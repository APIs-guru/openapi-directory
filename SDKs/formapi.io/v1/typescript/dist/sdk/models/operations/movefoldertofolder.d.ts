import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MoveFolderToFolderPathParams extends SpeakeasyBase {
    folderId: string;
}
export declare class MoveFolderToFolderMoveFolderData extends SpeakeasyBase {
    parentFolderId?: string;
}
export declare class MoveFolderToFolderSecurity extends SpeakeasyBase {
    apiTokenBasic: shared.SchemeApiTokenBasic;
}
export declare class MoveFolderToFolderFolder extends SpeakeasyBase {
    id?: string;
    name?: string;
    parentFolderId?: string;
    path?: string;
}
export declare class MoveFolderToFolderRequest extends SpeakeasyBase {
    pathParams: MoveFolderToFolderPathParams;
    request: MoveFolderToFolderMoveFolderData;
    security: MoveFolderToFolderSecurity;
}
export declare class MoveFolderToFolderResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    authenticationError?: shared.AuthenticationError;
    error?: shared.Error;
    folder?: MoveFolderToFolderFolder;
}
