import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetV4LayersAsAppliedActivityIdContentsPathParams extends SpeakeasyBase {
    activityId: string;
}
export declare class GetV4LayersAsAppliedActivityIdContentsHeaders extends SpeakeasyBase {
    accept: string;
    range: string;
}
export declare class GetV4LayersAsAppliedActivityIdContentsSecurityOption1 extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetV4LayersAsAppliedActivityIdContentsSecurityOption2 extends SpeakeasyBase {
    oauth2AuthorizationCode: shared.SchemeOauth2AuthorizationCode;
}
export declare class GetV4LayersAsAppliedActivityIdContentsSecurity extends SpeakeasyBase {
    option1?: GetV4LayersAsAppliedActivityIdContentsSecurityOption1;
    option2?: GetV4LayersAsAppliedActivityIdContentsSecurityOption2;
}
export declare class GetV4LayersAsAppliedActivityIdContentsRequest extends SpeakeasyBase {
    pathParams: GetV4LayersAsAppliedActivityIdContentsPathParams;
    headers: GetV4LayersAsAppliedActivityIdContentsHeaders;
    security: GetV4LayersAsAppliedActivityIdContentsSecurity;
}
export declare class GetV4LayersAsAppliedActivityIdContentsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    empty?: Map<string, any>;
    error?: shared.Error;
    headers: Map<string, string[]>;
    statusCode: number;
}
