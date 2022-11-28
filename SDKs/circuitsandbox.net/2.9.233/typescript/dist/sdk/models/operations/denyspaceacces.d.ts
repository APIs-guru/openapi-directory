import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DenySpaceAccesPathParams extends SpeakeasyBase {
    participantId: string;
    spaceId: string;
}
export declare class DenySpaceAccesRequestBody extends SpeakeasyBase {
    reason?: string;
}
export declare class DenySpaceAccesSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class DenySpaceAccesRequest extends SpeakeasyBase {
    pathParams: DenySpaceAccesPathParams;
    request?: DenySpaceAccesRequestBody;
    security: DenySpaceAccesSecurity;
}
export declare class DenySpaceAccesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
