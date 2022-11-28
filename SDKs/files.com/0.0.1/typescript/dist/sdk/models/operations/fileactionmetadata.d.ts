import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FileActionMetadataPathParams extends SpeakeasyBase {
    path: string;
}
export declare class FileActionMetadataQueryParams extends SpeakeasyBase {
    previewSize?: string;
    withPreviews?: boolean;
    withPriorityColor?: boolean;
}
export declare class FileActionMetadataRequest extends SpeakeasyBase {
    pathParams: FileActionMetadataPathParams;
    queryParams: FileActionMetadataQueryParams;
}
export declare class FileActionMetadataResponse extends SpeakeasyBase {
    contentType: string;
    fileEntity?: shared.FileEntity;
    statusCode: number;
}
