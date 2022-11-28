import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetCIdShowJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetCIdShowJsonRequest extends SpeakeasyBase {
    pathParams: GetCIdShowJsonPathParams;
}
export declare class GetCIdShowJsonResponse extends SpeakeasyBase {
    contentType: string;
    getCIdShowJson200ApplicationJsonAny?: any;
    statusCode: number;
}
