import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SearchSpaceParticipantsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class SearchSpaceParticipantsQueryParams extends SpeakeasyBase {
    query: string;
}
export declare class SearchSpaceParticipantsSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class SearchSpaceParticipantsRequest extends SpeakeasyBase {
    pathParams: SearchSpaceParticipantsPathParams;
    queryParams: SearchSpaceParticipantsQueryParams;
    security: SearchSpaceParticipantsSecurity;
}
export declare class SearchSpaceParticipantsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    participantsSearchResultLarges?: any[];
    statusCode: number;
}
