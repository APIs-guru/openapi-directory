import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateOrganizationExportQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: string;
    optFields?: string[];
    optPretty?: boolean;
}
export declare class CreateOrganizationExportRequestBody extends SpeakeasyBase {
    data?: shared.OrganizationExportRequest;
}
export declare class CreateOrganizationExport201ApplicationJson extends SpeakeasyBase {
    data?: shared.OrganizationExportResponse;
}
export declare class CreateOrganizationExportRequest extends SpeakeasyBase {
    queryParams: CreateOrganizationExportQueryParams;
    request: CreateOrganizationExportRequestBody;
}
export declare class CreateOrganizationExportResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    createOrganizationExport201ApplicationJsonObject?: CreateOrganizationExport201ApplicationJson;
}
