import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPendingParticipantsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetPendingParticipantsQueryParams extends SpeakeasyBase {
    numberOfResults?: number;
    searchPointer?: string;
}
export declare class GetPendingParticipantsSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class GetPendingParticipantsRequest extends SpeakeasyBase {
    pathParams: GetPendingParticipantsPathParams;
    queryParams: GetPendingParticipantsQueryParams;
    security: GetPendingParticipantsSecurity;
}
export declare class GetPendingParticipantsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    participantsSearchResult?: any;
    statusCode: number;
}
