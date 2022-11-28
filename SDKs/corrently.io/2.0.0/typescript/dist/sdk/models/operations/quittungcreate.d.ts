import { SpeakeasyBase } from "../../../internal/utils";
export declare class QuittungCreateRequestBody extends SpeakeasyBase {
    email?: string;
}
export declare class QuittungCreateRequest extends SpeakeasyBase {
    request: QuittungCreateRequestBody;
}
export declare class QuittungCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    quittungCreate200ApplicationJsonString?: string;
}
