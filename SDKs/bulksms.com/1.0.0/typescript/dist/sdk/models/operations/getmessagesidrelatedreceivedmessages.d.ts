import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetMessagesIdRelatedReceivedMessagesPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetMessagesIdRelatedReceivedMessagesSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class GetMessagesIdRelatedReceivedMessagesRequest extends SpeakeasyBase {
    pathParams: GetMessagesIdRelatedReceivedMessagesPathParams;
    security: GetMessagesIdRelatedReceivedMessagesSecurity;
}
export declare class GetMessagesIdRelatedReceivedMessagesResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    messages?: shared.Message[];
    statusCode: number;
}
