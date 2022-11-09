import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class StorageListFilesQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
    orderType?: string;
    search?: string;
}
export declare class StorageListFilesSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
    project: shared.SchemeProject;
}
export declare class StorageListFilesRequest extends SpeakeasyBase {
    queryParams: StorageListFilesQueryParams;
    security: StorageListFilesSecurity;
}
export declare class StorageListFilesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    fileList?: shared.FileList;
}
