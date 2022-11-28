import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetConversationsByLabelPathParams extends SpeakeasyBase {
    labelId: string;
}
export declare class GetConversationsByLabelQueryParams extends SpeakeasyBase {
    nextPagePointer?: string;
    pageSize?: number;
}
export declare class GetConversationsByLabelSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class GetConversationsByLabelRequest extends SpeakeasyBase {
    pathParams: GetConversationsByLabelPathParams;
    queryParams: GetConversationsByLabelQueryParams;
    security: GetConversationsByLabelSecurity;
}
export declare class GetConversationsByLabelResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    conversationsPage?: any;
    statusCode: number;
}
