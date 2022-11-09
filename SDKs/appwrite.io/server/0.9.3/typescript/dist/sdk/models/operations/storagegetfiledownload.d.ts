import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class StorageGetFileDownloadPathParams extends SpeakeasyBase {
    fileId: string;
}
export declare class StorageGetFileDownloadSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
    key: shared.SchemeKey;
    project: shared.SchemeProject;
}
export declare class StorageGetFileDownloadRequest extends SpeakeasyBase {
    pathParams: StorageGetFileDownloadPathParams;
    security: StorageGetFileDownloadSecurity;
}
export declare class StorageGetFileDownloadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
