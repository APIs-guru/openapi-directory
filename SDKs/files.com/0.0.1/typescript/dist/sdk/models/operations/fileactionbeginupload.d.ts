import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FileActionBeginUploadPathParams extends SpeakeasyBase {
    path: string;
}
export declare class FileActionBeginUploadRequestBody extends SpeakeasyBase {
    mkdirParents?: boolean;
    part?: number;
    parts?: number;
    ref?: string;
    restart?: number;
    withRename?: boolean;
}
export declare class FileActionBeginUploadRequest extends SpeakeasyBase {
    pathParams: FileActionBeginUploadPathParams;
    request?: FileActionBeginUploadRequestBody;
}
export declare class FileActionBeginUploadResponse extends SpeakeasyBase {
    contentType: string;
    fileUploadPartEntities?: shared.FileUploadPartEntity[];
    statusCode: number;
}
