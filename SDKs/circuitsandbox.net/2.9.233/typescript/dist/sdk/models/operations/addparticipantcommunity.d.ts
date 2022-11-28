import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddParticipantCommunityPathParams extends SpeakeasyBase {
    convId: string;
}
export declare class AddParticipantCommunityRequestBody extends SpeakeasyBase {
    participants: string[];
}
export declare class AddParticipantCommunitySecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class AddParticipantCommunityRequest extends SpeakeasyBase {
    pathParams: AddParticipantCommunityPathParams;
    request: AddParticipantCommunityRequestBody;
    security: AddParticipantCommunitySecurity;
}
export declare class AddParticipantCommunityResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    conversation?: any;
    statusCode: number;
}
