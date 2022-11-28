import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOrganizationExportPathParams extends SpeakeasyBase {
    organizationExportGid: string;
}
export declare class GetOrganizationExportQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class GetOrganizationExport200ApplicationJson extends SpeakeasyBase {
    data?: shared.OrganizationExportResponse;
}
export declare class GetOrganizationExportRequest extends SpeakeasyBase {
    pathParams: GetOrganizationExportPathParams;
    queryParams: GetOrganizationExportQueryParams;
}
export declare class GetOrganizationExportResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getOrganizationExport200ApplicationJsonObject?: GetOrganizationExport200ApplicationJson;
}
