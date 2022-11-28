import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StorageUpdateFilePathParams extends SpeakeasyBase {
    fileId: string;
}
export declare class StorageUpdateFileRequestBody extends SpeakeasyBase {
    read: string[];
    write: string[];
}
export declare class StorageUpdateFileSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
    key: shared.SchemeKey;
    project: shared.SchemeProject;
}
export declare class StorageUpdateFileRequest extends SpeakeasyBase {
    pathParams: StorageUpdateFilePathParams;
    request?: StorageUpdateFileRequestBody;
    security: StorageUpdateFileSecurity;
}
export declare class StorageUpdateFileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    file?: shared.File;
}
