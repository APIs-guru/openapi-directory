import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutTIdBookmarkJsonPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PutTIdBookmarkJsonHeaders extends SpeakeasyBase {
    apiKey: string;
    apiUsername: string;
}
export declare class PutTIdBookmarkJsonRequest extends SpeakeasyBase {
    pathParams: PutTIdBookmarkJsonPathParams;
    headers: PutTIdBookmarkJsonHeaders;
}
export declare class PutTIdBookmarkJsonResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
