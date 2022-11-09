import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class StorageCreateFileRequestBody extends SpeakeasyBase {
    file: string;
    read?: string[];
    write?: string[];
}
export declare class StorageCreateFileSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
    key: shared.SchemeKey;
    project: shared.SchemeProject;
}
export declare class StorageCreateFileRequest extends SpeakeasyBase {
    request?: StorageCreateFileRequestBody;
    security: StorageCreateFileSecurity;
}
export declare class StorageCreateFileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    file?: shared.File;
}
