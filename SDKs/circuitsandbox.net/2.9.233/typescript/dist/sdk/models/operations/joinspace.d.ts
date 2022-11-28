import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class JoinSpacePathParams extends SpeakeasyBase {
    id: string;
}
export declare class JoinSpaceSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class JoinSpaceRequest extends SpeakeasyBase {
    pathParams: JoinSpacePathParams;
    security: JoinSpaceSecurity;
}
export declare class JoinSpaceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    participantSpaceWrapper?: any;
    statusCode: number;
}
