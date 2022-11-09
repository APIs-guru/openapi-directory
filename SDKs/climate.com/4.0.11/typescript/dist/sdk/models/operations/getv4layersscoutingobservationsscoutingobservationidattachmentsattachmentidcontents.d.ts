import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsPathParams extends SpeakeasyBase {
    attachmentId: string;
    scoutingObservationId: string;
}
export declare class GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsHeaders extends SpeakeasyBase {
    accept: string;
    range: string;
}
export declare class GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsSecurityOption1 extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsSecurityOption2 extends SpeakeasyBase {
    oauth2AuthorizationCode: shared.SchemeOauth2AuthorizationCode;
}
export declare class GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsSecurity extends SpeakeasyBase {
    option1?: GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsSecurityOption1;
    option2?: GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsSecurityOption2;
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
