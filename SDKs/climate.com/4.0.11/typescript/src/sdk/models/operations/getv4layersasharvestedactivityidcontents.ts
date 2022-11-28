import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetV4LayersAsHarvestedActivityIdContentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=activityId" })
  activityId: string;
}


export class GetV4LayersAsHarvestedActivityIdContentsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Range" })
  range: string;
}


export class GetV4LayersAsHarvestedActivityIdContentsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey?: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2AuthorizationCode?: shared.SchemeOauth2AuthorizationCode;
}


export class GetV4LayersAsHarvestedActivityIdContentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV4LayersAsHarvestedActivityIdContentsPathParams;

  @SpeakeasyMetadata()
  headers: GetV4LayersAsHarvestedActivityIdContentsHeaders;

  @SpeakeasyMetadata()
  security: GetV4LayersAsHarvestedActivityIdContentsSecurity;
}


export class GetV4LayersAsHarvestedActivityIdContentsResponse extends SpeakeasyBase {
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
