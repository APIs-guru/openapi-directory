import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class V2RemoveParticipantsFromSpacePathParams extends SpeakeasyBase {
    id: string;
}
export declare class V2RemoveParticipantsFromSpaceRequestBody extends SpeakeasyBase {
    userIds: string[];
}
export declare class V2RemoveParticipantsFromSpaceSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class V2RemoveParticipantsFromSpaceRequest extends SpeakeasyBase {
    pathParams: V2RemoveParticipantsFromSpacePathParams;
    request: V2RemoveParticipantsFromSpaceRequestBody;
    security: V2RemoveParticipantsFromSpaceSecurity;
}
export declare class V2RemoveParticipantsFromSpaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
