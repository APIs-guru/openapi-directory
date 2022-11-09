import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetV4LayersAsPlantedActivityIdContentsPathParams extends SpeakeasyBase {
    activityId: string;
}
export declare class GetV4LayersAsPlantedActivityIdContentsHeaders extends SpeakeasyBase {
    accept: string;
    range: string;
}
export declare class GetV4LayersAsPlantedActivityIdContentsSecurityOption1 extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetV4LayersAsPlantedActivityIdContentsSecurityOption2 extends SpeakeasyBase {
    oauth2AuthorizationCode: shared.SchemeOauth2AuthorizationCode;
}
export declare class GetV4LayersAsPlantedActivityIdContentsSecurity extends SpeakeasyBase {
    option1?: GetV4LayersAsPlantedActivityIdContentsSecurityOption1;
    option2?: GetV4LayersAsPlantedActivityIdContentsSecurityOption2;
}
export declare class GetV4LayersAsPlantedActivityIdContentsRequest extends SpeakeasyBase {
    pathParams: GetV4LayersAsPlantedActivityIdContentsPathParams;
    headers: GetV4LayersAsPlantedActivityIdContentsHeaders;
    security: GetV4LayersAsPlantedActivityIdContentsSecurity;
}
export declare class GetV4LayersAsPlantedActivityIdContentsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    empty?: Map<string, any>;
    error?: shared.Error;
    headers: Map<string, string[]>;
    statusCode: number;
}
