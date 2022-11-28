import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddParticipantGroupPathParams extends SpeakeasyBase {
    convId: string;
}
export declare class AddParticipantGroupRequestBody extends SpeakeasyBase {
    participants: string[];
}
export declare class AddParticipantGroupSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class AddParticipantGroupRequest extends SpeakeasyBase {
    pathParams: AddParticipantGroupPathParams;
    request: AddParticipantGroupRequestBody;
    security: AddParticipantGroupSecurity;
}
export declare class AddParticipantGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    conversation?: any;
    statusCode: number;
}
