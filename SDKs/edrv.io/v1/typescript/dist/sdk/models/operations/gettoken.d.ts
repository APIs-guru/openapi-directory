import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTokenPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetTokenQueryParams extends SpeakeasyBase {
    includeDriver?: boolean;
    includeOrganization?: boolean;
}
export declare class GetTokenRequest extends SpeakeasyBase {
    pathParams: GetTokenPathParams;
    queryParams: GetTokenQueryParams;
}
export declare class GetTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
