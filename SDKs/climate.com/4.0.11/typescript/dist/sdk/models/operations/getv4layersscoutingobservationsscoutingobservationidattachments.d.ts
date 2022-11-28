import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsPathParams extends SpeakeasyBase {
    scoutingObservationId: string;
}
export declare class GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsHeaders extends SpeakeasyBase {
    xLimit?: number;
    xNextToken?: string;
}
export declare class GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsSecurity extends SpeakeasyBase {
    apiKey?: shared.SchemeApiKey;
    oauth2AuthorizationCode?: shared.SchemeOauth2AuthorizationCode;
}
export declare class GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsRequest extends SpeakeasyBase {
    pathParams: GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsPathParams;
    headers: GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsHeaders;
    security: GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsSecurity;
}
export declare class GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    error?: shared.Error;
    headers: Map<string, string[]>;
    scoutingObservationAttachments?: any;
    statusCode: number;
}
