import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StorageGetFilePathParams extends SpeakeasyBase {
    fileId: string;
}
export declare class StorageGetFileSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
    key: shared.SchemeKey;
    project: shared.SchemeProject;
}
export declare class StorageGetFileRequest extends SpeakeasyBase {
    pathParams: StorageGetFilePathParams;
    security: StorageGetFileSecurity;
}
export declare class StorageGetFileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    file?: shared.File;
}
