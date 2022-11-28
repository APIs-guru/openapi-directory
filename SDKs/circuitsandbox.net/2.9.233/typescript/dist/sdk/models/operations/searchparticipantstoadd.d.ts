import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SearchParticipantsToAddPathParams extends SpeakeasyBase {
    id: string;
}
export declare class SearchParticipantsToAddQueryParams extends SpeakeasyBase {
    query: string;
}
export declare class SearchParticipantsToAddSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class SearchParticipantsToAddRequest extends SpeakeasyBase {
    pathParams: SearchParticipantsToAddPathParams;
    queryParams: SearchParticipantsToAddQueryParams;
    security: SearchParticipantsToAddSecurity;
}
export declare class SearchParticipantsToAddResponse extends SpeakeasyBase {
    addParticipantsSearchResults?: any[];
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
