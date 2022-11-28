import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetParticipantsByConvIdPathParams extends SpeakeasyBase {
    convId: string;
}
export declare enum GetParticipantsByConvIdTypeEnum {
    Regular = "REGULAR",
    Moderator = "MODERATOR",
    Guest = "GUEST",
    Former = "FORMER",
    Bot = "BOT"
}
export declare class GetParticipantsByConvIdQueryParams extends SpeakeasyBase {
    name?: string;
    pageSize: number;
    searchPointer?: string;
    type?: GetParticipantsByConvIdTypeEnum;
}
export declare class GetParticipantsByConvIdSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class GetParticipantsByConvIdRequest extends SpeakeasyBase {
    pathParams: GetParticipantsByConvIdPathParams;
    queryParams: GetParticipantsByConvIdQueryParams;
    security: GetParticipantsByConvIdSecurity;
}
export declare class GetParticipantsByConvIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    conversationParticipantsLists?: any[];
    statusCode: number;
}
