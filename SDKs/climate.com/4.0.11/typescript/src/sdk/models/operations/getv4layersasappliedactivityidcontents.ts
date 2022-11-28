import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetV4LayersAsAppliedActivityIdContentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=activityId" })
  activityId: string;
}


export class GetV4LayersAsAppliedActivityIdContentsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Range" })
  range: string;
}


export class GetV4LayersAsAppliedActivityIdContentsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey?: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2AuthorizationCode?: shared.SchemeOauth2AuthorizationCode;
}


export class GetV4LayersAsAppliedActivityIdContentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV4LayersAsAppliedActivityIdContentsPathParams;

  @SpeakeasyMetadata()
  headers: GetV4LayersAsAppliedActivityIdContentsHeaders;

  @SpeakeasyMetadata()
  security: GetV4LayersAsAppliedActivityIdContentsSecurity;
}


export class GetV4LayersAsAppliedActivityIdContentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  empty?: Map<string, any>;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
