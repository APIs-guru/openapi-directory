import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveParticipantGroupPathParams extends SpeakeasyBase {
    convId: string;
}
export declare class RemoveParticipantGroupQueryParams extends SpeakeasyBase {
    participants: string[];
}
export declare class RemoveParticipantGroupSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class RemoveParticipantGroupRequest extends SpeakeasyBase {
    pathParams: RemoveParticipantGroupPathParams;
    queryParams: RemoveParticipantGroupQueryParams;
    security: RemoveParticipantGroupSecurity;
}
export declare class RemoveParticipantGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    conversation?: any;
    statusCode: number;
}
