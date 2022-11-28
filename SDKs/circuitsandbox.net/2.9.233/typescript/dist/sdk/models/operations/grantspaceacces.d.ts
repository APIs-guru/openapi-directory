import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GrantSpaceAccesPathParams extends SpeakeasyBase {
    participantId: string;
    spaceId: string;
}
export declare class GrantSpaceAccesSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class GrantSpaceAccesRequest extends SpeakeasyBase {
    pathParams: GrantSpaceAccesPathParams;
    security: GrantSpaceAccesSecurity;
}
export declare class GrantSpaceAccesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
