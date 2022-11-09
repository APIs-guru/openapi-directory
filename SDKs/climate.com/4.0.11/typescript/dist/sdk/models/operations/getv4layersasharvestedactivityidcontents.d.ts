import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetV4LayersAsHarvestedActivityIdContentsPathParams extends SpeakeasyBase {
    activityId: string;
}
export declare class GetV4LayersAsHarvestedActivityIdContentsHeaders extends SpeakeasyBase {
    accept: string;
    range: string;
}
export declare class GetV4LayersAsHarvestedActivityIdContentsSecurityOption1 extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetV4LayersAsHarvestedActivityIdContentsSecurityOption2 extends SpeakeasyBase {
    oauth2AuthorizationCode: shared.SchemeOauth2AuthorizationCode;
}
export declare class GetV4LayersAsHarvestedActivityIdContentsSecurity extends SpeakeasyBase {
    option1?: GetV4LayersAsHarvestedActivityIdContentsSecurityOption1;
    option2?: GetV4LayersAsHarvestedActivityIdContentsSecurityOption2;
}
export declare class GetV4LayersAsHarvestedActivityIdContentsRequest extends SpeakeasyBase {
    pathParams: GetV4LayersAsHarvestedActivityIdContentsPathParams;
    headers: GetV4LayersAsHarvestedActivityIdContentsHeaders;
    security: GetV4LayersAsHarvestedActivityIdContentsSecurity;
}
export declare class GetV4LayersAsHarvestedActivityIdContentsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    empty?: Map<string, any>;
    error?: shared.Error;
    headers: Map<string, string[]>;
    statusCode: number;
}
