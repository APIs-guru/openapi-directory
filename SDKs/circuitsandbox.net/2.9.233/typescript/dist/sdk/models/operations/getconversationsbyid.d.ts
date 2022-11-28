import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetConversationsByIdQueryParams extends SpeakeasyBase {
    convIds: string[];
}
export declare class GetConversationsByIdSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class GetConversationsByIdRequest extends SpeakeasyBase {
    queryParams: GetConversationsByIdQueryParams;
    security: GetConversationsByIdSecurity;
}
export declare class GetConversationsByIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    conversations?: any[];
    statusCode: number;
}
