import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetV4LayersAsAppliedActivityIdContentsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=activityId" })
  activityId: string;
}


export class GetV4LayersAsAppliedActivityIdContentsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Range" })
  range: string;
}


export class GetV4LayersAsAppliedActivityIdContentsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetV4LayersAsAppliedActivityIdContentsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2AuthorizationCode: shared.SchemeOauth2AuthorizationCode;
}


export class GetV4LayersAsAppliedActivityIdContentsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetV4LayersAsAppliedActivityIdContentsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetV4LayersAsAppliedActivityIdContentsSecurityOption2;
}


export class GetV4LayersAsAppliedActivityIdContentsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetV4LayersAsAppliedActivityIdContentsPathParams;

  @Metadata()
  headers: GetV4LayersAsAppliedActivityIdContentsHeaders;

  @Metadata()
  security: GetV4LayersAsAppliedActivityIdContentsSecurity;
}


export class GetV4LayersAsAppliedActivityIdContentsResponse extends SpeakeasyBase {
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
