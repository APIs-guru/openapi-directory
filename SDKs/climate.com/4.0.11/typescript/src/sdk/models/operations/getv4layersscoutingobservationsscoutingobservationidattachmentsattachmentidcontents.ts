import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=attachmentId" })
  attachmentId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scoutingObservationId" })
  scoutingObservationId: string;
}


export class GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Range" })
  range: string;
}


export class GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey?: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2AuthorizationCode?: shared.SchemeOauth2AuthorizationCode;
}


export class GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsPathParams;

  @SpeakeasyMetadata()
  headers: GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsHeaders;

  @SpeakeasyMetadata()
  security: GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsSecurity;
}


export class GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
