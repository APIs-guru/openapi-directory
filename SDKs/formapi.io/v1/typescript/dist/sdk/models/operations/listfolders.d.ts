import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListFoldersQueryParams extends SpeakeasyBase {
    parentFolderId?: string;
}
export declare class ListFoldersSecurity extends SpeakeasyBase {
    apiTokenBasic: shared.SchemeApiTokenBasic;
}
export declare class ListFoldersFolder extends SpeakeasyBase {
    id?: string;
    name?: string;
    parentFolderId?: string;
    path?: string;
}
export declare class ListFoldersRequest extends SpeakeasyBase {
    queryParams: ListFoldersQueryParams;
    security: ListFoldersSecurity;
}
export declare class ListFoldersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    authenticationError?: shared.AuthenticationError;
    folders?: ListFoldersFolder[];
}
