import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAdminBackupsFilenamePathParams extends SpeakeasyBase {
    filename: string;
}
export declare class GetAdminBackupsFilenameQueryParams extends SpeakeasyBase {
    token: string;
}
export declare class GetAdminBackupsFilenameRequest extends SpeakeasyBase {
    pathParams: GetAdminBackupsFilenamePathParams;
    queryParams: GetAdminBackupsFilenameQueryParams;
}
export declare class GetAdminBackupsFilenameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
