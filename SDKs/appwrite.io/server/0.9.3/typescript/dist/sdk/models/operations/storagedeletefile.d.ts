import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StorageDeleteFilePathParams extends SpeakeasyBase {
    fileId: string;
}
export declare class StorageDeleteFileSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
    key: shared.SchemeKey;
    project: shared.SchemeProject;
}
export declare class StorageDeleteFileRequest extends SpeakeasyBase {
    pathParams: StorageDeleteFilePathParams;
    security: StorageDeleteFileSecurity;
}
export declare class StorageDeleteFileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
