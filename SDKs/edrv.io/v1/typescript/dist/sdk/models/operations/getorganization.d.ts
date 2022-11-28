import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetOrganizationPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetOrganizationQueryParams extends SpeakeasyBase {
    includeLocations?: boolean;
}
export declare class GetOrganizationRequest extends SpeakeasyBase {
    pathParams: GetOrganizationPathParams;
    queryParams: GetOrganizationQueryParams;
}
export declare class GetOrganizationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
