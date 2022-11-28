import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StorageGetFilePreviewPathParams extends SpeakeasyBase {
    fileId: string;
}
export declare class StorageGetFilePreviewQueryParams extends SpeakeasyBase {
    background?: string;
    borderColor?: string;
    borderRadius?: number;
    borderWidth?: number;
    gravity?: string;
    height?: number;
    opacity?: number;
    output?: string;
    quality?: number;
    rotation?: number;
    width?: number;
}
export declare class StorageGetFilePreviewSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
    key: shared.SchemeKey;
    project: shared.SchemeProject;
}
export declare class StorageGetFilePreviewRequest extends SpeakeasyBase {
    pathParams: StorageGetFilePreviewPathParams;
    queryParams: StorageGetFilePreviewQueryParams;
    security: StorageGetFilePreviewSecurity;
}
export declare class StorageGetFilePreviewResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
