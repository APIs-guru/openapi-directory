import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scoutingObservationId" })
  scoutingObservationId: string;
}


export class GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Limit" })
  xLimit?: number;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Next-Token" })
  xNextToken?: string;
}


export class GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey?: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2AuthorizationCode?: shared.SchemeOauth2AuthorizationCode;
}


export class GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsPathParams;

  @SpeakeasyMetadata()
  headers: GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsHeaders;

  @SpeakeasyMetadata()
  security: GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsSecurity;
}


export class GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  empty?: Map<string, any>;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  scoutingObservationAttachments?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
