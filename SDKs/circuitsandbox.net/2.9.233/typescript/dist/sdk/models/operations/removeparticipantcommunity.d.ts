import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveParticipantCommunityPathParams extends SpeakeasyBase {
    convId: string;
}
export declare class RemoveParticipantCommunityQueryParams extends SpeakeasyBase {
    participants: string[];
}
export declare class RemoveParticipantCommunitySecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class RemoveParticipantCommunityRequest extends SpeakeasyBase {
    pathParams: RemoveParticipantCommunityPathParams;
    queryParams: RemoveParticipantCommunityQueryParams;
    security: RemoveParticipantCommunitySecurity;
}
export declare class RemoveParticipantCommunityResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    conversation?: any;
    statusCode: number;
}
