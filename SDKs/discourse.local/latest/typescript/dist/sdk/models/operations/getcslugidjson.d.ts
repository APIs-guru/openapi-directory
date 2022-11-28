import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetCSlugIdJsonPathParams extends SpeakeasyBase {
    id: number;
    slug: string;
}
export declare class GetCSlugIdJsonRequest extends SpeakeasyBase {
    pathParams: GetCSlugIdJsonPathParams;
}
export declare class GetCSlugIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    getCSlugIdJson200ApplicationJsonAny?: any;
    statusCode: number;
}
