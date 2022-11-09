import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=attachmentId" })
  attachmentId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=scoutingObservationId" })
  scoutingObservationId: string;
}


export class GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Range" })
  range: string;
}


export class GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2AuthorizationCode: shared.SchemeOauth2AuthorizationCode;
}


export class GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsSecurityOption2;
}


export class GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsPathParams;

  @Metadata()
  headers: GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsHeaders;

  @Metadata()
  security: GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsSecurity;
}


export class GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
