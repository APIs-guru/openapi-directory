import { SpeakeasyBase } from "../../../internal/utils";
export declare class MessagesDeletePathParams extends SpeakeasyBase {
    id: string;
    logId: string;
}
export declare class MessagesDeleteRequest extends SpeakeasyBase {
    pathParams: MessagesDeletePathParams;
}
export declare class MessagesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
