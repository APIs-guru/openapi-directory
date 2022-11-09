import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=scoutingObservationId" })
  scoutingObservationId: string;
}


export class GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Limit" })
  xLimit?: number;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Next-Token" })
  xNextToken?: string;
}


export class GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2AuthorizationCode: shared.SchemeOauth2AuthorizationCode;
}


export class GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsSecurityOption2;
}


export class GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsPathParams;

  @Metadata()
  headers: GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsHeaders;

  @Metadata()
  security: GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsSecurity;
}


export class GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  empty?: Map<string, any>;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  scoutingObservationAttachments?: any;

  @Metadata()
  statusCode: number;
}
