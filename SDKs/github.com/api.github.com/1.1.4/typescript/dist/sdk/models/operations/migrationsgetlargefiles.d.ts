import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MigrationsGetLargeFilesPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class MigrationsGetLargeFilesRequest extends SpeakeasyBase {
    pathParams: MigrationsGetLargeFilesPathParams;
}
export declare class MigrationsGetLargeFilesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    porterLargeFiles?: shared.PorterLargeFile[];
}
