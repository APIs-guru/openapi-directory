import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetV4LayersAsPlantedQueryParams extends SpeakeasyBase {
    occurredAfter?: Date;
    occurredBefore?: Date;
    resourceOwnerId?: string;
    updatedAfter?: Date;
}
export declare class GetV4LayersAsPlantedHeaders extends SpeakeasyBase {
    accept: string;
    xLimit?: number;
    xNextToken?: string;
}
export declare class GetV4LayersAsPlantedSecurityOption1 extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetV4LayersAsPlantedSecurityOption2 extends SpeakeasyBase {
    oauth2AuthorizationCode: shared.SchemeOauth2AuthorizationCode;
}
export declare class GetV4LayersAsPlantedSecurity extends SpeakeasyBase {
    option1?: GetV4LayersAsPlantedSecurityOption1;
    option2?: GetV4LayersAsPlantedSecurityOption2;
}
export declare class GetV4LayersAsPlantedRequest extends SpeakeasyBase {
    queryParams: GetV4LayersAsPlantedQueryParams;
    headers: GetV4LayersAsPlantedHeaders;
    security: GetV4LayersAsPlantedSecurity;
}
export declare class GetV4LayersAsPlantedResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    error?: shared.Error;
    headers: Map<string, string[]>;
    plantingActivities?: any;
    statusCode: number;
}
