import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetV4LayersAsPlantedActivityIdContentsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=activityId" })
  activityId: string;
}


export class GetV4LayersAsPlantedActivityIdContentsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Range" })
  range: string;
}


export class GetV4LayersAsPlantedActivityIdContentsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetV4LayersAsPlantedActivityIdContentsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2AuthorizationCode: shared.SchemeOauth2AuthorizationCode;
}


export class GetV4LayersAsPlantedActivityIdContentsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetV4LayersAsPlantedActivityIdContentsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetV4LayersAsPlantedActivityIdContentsSecurityOption2;
}


export class GetV4LayersAsPlantedActivityIdContentsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetV4LayersAsPlantedActivityIdContentsPathParams;

  @Metadata()
  headers: GetV4LayersAsPlantedActivityIdContentsHeaders;

  @Metadata()
  security: GetV4LayersAsPlantedActivityIdContentsSecurity;
}


export class GetV4LayersAsPlantedActivityIdContentsResponse extends SpeakeasyBase {
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
