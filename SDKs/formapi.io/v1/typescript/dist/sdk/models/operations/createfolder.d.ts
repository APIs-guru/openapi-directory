import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateFolderCreateFolderDataFolder extends SpeakeasyBase {
    name: string;
    parentFolderId?: string;
}
export declare class CreateFolderCreateFolderData extends SpeakeasyBase {
    folder: CreateFolderCreateFolderDataFolder;
}
export declare class CreateFolderSecurity extends SpeakeasyBase {
    apiTokenBasic: shared.SchemeApiTokenBasic;
}
export declare class CreateFolderFolder extends SpeakeasyBase {
    id?: string;
    name?: string;
    parentFolderId?: string;
    path?: string;
}
export declare class CreateFolderRequest extends SpeakeasyBase {
    request: CreateFolderCreateFolderData;
    security: CreateFolderSecurity;
}
export declare class CreateFolderResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    authenticationError?: shared.AuthenticationError;
    error?: shared.Error;
    folder?: CreateFolderFolder;
}
