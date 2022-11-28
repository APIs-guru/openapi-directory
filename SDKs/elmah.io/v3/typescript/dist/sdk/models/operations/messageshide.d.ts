import { SpeakeasyBase } from "../../../internal/utils";
export declare class MessagesHidePathParams extends SpeakeasyBase {
    id: string;
    logId: string;
}
export declare class MessagesHideRequest extends SpeakeasyBase {
    pathParams: MessagesHidePathParams;
}
export declare class MessagesHideResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
