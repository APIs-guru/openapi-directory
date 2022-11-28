import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestSpaceAccesPathParams extends SpeakeasyBase {
    spaceId: string;
}
export declare class RequestSpaceAccesRequestBody extends SpeakeasyBase {
    reason?: string;
}
export declare class RequestSpaceAccesSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class RequestSpaceAccesRequest extends SpeakeasyBase {
    pathParams: RequestSpaceAccesPathParams;
    request?: RequestSpaceAccesRequestBody;
    security: RequestSpaceAccesSecurity;
}
export declare class RequestSpaceAccesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
