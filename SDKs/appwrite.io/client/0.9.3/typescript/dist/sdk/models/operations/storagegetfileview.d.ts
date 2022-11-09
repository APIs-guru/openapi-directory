import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class StorageGetFileViewPathParams extends SpeakeasyBase {
    fileId: string;
}
export declare class StorageGetFileViewSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
    project: shared.SchemeProject;
}
export declare class StorageGetFileViewRequest extends SpeakeasyBase {
    pathParams: StorageGetFileViewPathParams;
    security: StorageGetFileViewSecurity;
}
export declare class StorageGetFileViewResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
