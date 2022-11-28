import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDriverPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetDriverQueryParams extends SpeakeasyBase {
    includeGroup?: boolean;
    includeOrganization?: boolean;
    includeTokens?: boolean;
}
export declare class GetDriverRequest extends SpeakeasyBase {
    pathParams: GetDriverPathParams;
    queryParams: GetDriverQueryParams;
}
export declare class GetDriverResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
