import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsPathParams extends SpeakeasyBase {
    attachmentId: string;
    scoutingObservationId: string;
}
export declare class GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsHeaders extends SpeakeasyBase {
    accept: string;
    range: string;
}
export declare class GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsSecurity extends SpeakeasyBase {
    apiKey?: shared.SchemeApiKey;
    oauth2AuthorizationCode?: shared.SchemeOauth2AuthorizationCode;
}
export declare class GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsRequest extends SpeakeasyBase {
    pathParams: GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsPathParams;
    headers: GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsHeaders;
    security: GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsSecurity;
}
export declare class GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    error?: shared.Error;
    headers: Map<string, string[]>;
    statusCode: number;
}
