import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteTIdJsonPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteTIdJsonHeaders extends SpeakeasyBase {
    apiKey: string;
    apiUsername: string;
}
export declare class DeleteTIdJsonRequest extends SpeakeasyBase {
    pathParams: DeleteTIdJsonPathParams;
    headers: DeleteTIdJsonHeaders;
}
export declare class DeleteTIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
