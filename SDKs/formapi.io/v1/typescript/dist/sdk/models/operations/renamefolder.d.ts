import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RenameFolderPathParams extends SpeakeasyBase {
    folderId: string;
}
export declare class RenameFolderRenameFolderData extends SpeakeasyBase {
    name: string;
}
export declare class RenameFolderSecurity extends SpeakeasyBase {
    apiTokenBasic: shared.SchemeApiTokenBasic;
}
export declare class RenameFolderRequest extends SpeakeasyBase {
    pathParams: RenameFolderPathParams;
    request: RenameFolderRenameFolderData;
    security: RenameFolderSecurity;
}
export declare class RenameFolderResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    authenticationError?: shared.AuthenticationError;
}
