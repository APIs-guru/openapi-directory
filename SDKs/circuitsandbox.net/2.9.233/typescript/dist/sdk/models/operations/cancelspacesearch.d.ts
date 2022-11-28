import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CancelSpaceSearchPathParams extends SpeakeasyBase {
    searchId: string;
}
export declare class CancelSpaceSearchSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class CancelSpaceSearchRequest extends SpeakeasyBase {
    pathParams: CancelSpaceSearchPathParams;
    security: CancelSpaceSearchSecurity;
}
export declare class CancelSpaceSearchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
