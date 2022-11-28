import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMessagesQueryParams extends SpeakeasyBase {
    cursor?: string;
    perPage?: number;
    projectId: number;
    userId?: number;
}
export declare class GetMessagesRequest extends SpeakeasyBase {
    queryParams: GetMessagesQueryParams;
}
export declare class GetMessagesResponse extends SpeakeasyBase {
    contentType: string;
    messageEntities?: shared.MessageEntity[];
    statusCode: number;
}
