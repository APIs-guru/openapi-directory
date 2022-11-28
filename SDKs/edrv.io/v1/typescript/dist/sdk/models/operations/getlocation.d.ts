import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetLocationPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetLocationQueryParams extends SpeakeasyBase {
    includeChargestations?: boolean;
    includeOrganization?: boolean;
}
export declare class GetLocationRequest extends SpeakeasyBase {
    pathParams: GetLocationPathParams;
    queryParams: GetLocationQueryParams;
}
export declare class GetLocationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
