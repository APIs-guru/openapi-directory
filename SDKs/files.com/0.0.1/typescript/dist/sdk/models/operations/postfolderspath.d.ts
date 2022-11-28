import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostFoldersPathPathParams extends SpeakeasyBase {
    path: string;
}
export declare class PostFoldersPathRequest extends SpeakeasyBase {
    pathParams: PostFoldersPathPathParams;
}
export declare class PostFoldersPathResponse extends SpeakeasyBase {
    contentType: string;
    fileEntity?: shared.FileEntity;
    statusCode: number;
}
