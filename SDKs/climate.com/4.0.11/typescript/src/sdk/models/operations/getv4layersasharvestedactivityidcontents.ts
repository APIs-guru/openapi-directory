import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetV4LayersAsHarvestedActivityIdContentsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=activityId" })
  activityId: string;
}


export class GetV4LayersAsHarvestedActivityIdContentsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Range" })
  range: string;
}


export class GetV4LayersAsHarvestedActivityIdContentsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetV4LayersAsHarvestedActivityIdContentsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2AuthorizationCode: shared.SchemeOauth2AuthorizationCode;
}


export class GetV4LayersAsHarvestedActivityIdContentsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetV4LayersAsHarvestedActivityIdContentsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetV4LayersAsHarvestedActivityIdContentsSecurityOption2;
}


export class GetV4LayersAsHarvestedActivityIdContentsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetV4LayersAsHarvestedActivityIdContentsPathParams;

  @Metadata()
  headers: GetV4LayersAsHarvestedActivityIdContentsHeaders;

  @Metadata()
  security: GetV4LayersAsHarvestedActivityIdContentsSecurity;
}


export class GetV4LayersAsHarvestedActivityIdContentsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  empty?: Map<string, any>;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
