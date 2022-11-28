import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FolderListForPathPathParams extends SpeakeasyBase {
    path: string;
}
export declare class FolderListForPathQueryParams extends SpeakeasyBase {
    cursor?: string;
    filter?: string;
    perPage?: number;
    previewSize?: string;
    search?: string;
    searchAll?: boolean;
    withPreviews?: boolean;
    withPriorityColor?: boolean;
}
export declare class FolderListForPathRequest extends SpeakeasyBase {
    pathParams: FolderListForPathPathParams;
    queryParams: FolderListForPathQueryParams;
}
export declare class FolderListForPathResponse extends SpeakeasyBase {
    contentType: string;
    fileEntities?: shared.FileEntity[];
    statusCode: number;
}
