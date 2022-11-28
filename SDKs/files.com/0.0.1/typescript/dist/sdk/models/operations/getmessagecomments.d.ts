import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMessageCommentsQueryParams extends SpeakeasyBase {
    cursor?: string;
    messageId: number;
    perPage?: number;
    userId?: number;
}
export declare class GetMessageCommentsRequest extends SpeakeasyBase {
    queryParams: GetMessageCommentsQueryParams;
}
export declare class GetMessageCommentsResponse extends SpeakeasyBase {
    contentType: string;
    messageCommentEntities?: shared.MessageCommentEntity[];
    statusCode: number;
}
