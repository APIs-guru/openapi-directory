import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutServerRedundancyHostPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=host" })
  host: string;
}


export class PutServerRedundancyHostRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=redundancyAllowed" })
  redundancyAllowed: boolean;
}


export class PutServerRedundancyHostSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PutServerRedundancyHostRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutServerRedundancyHostPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PutServerRedundancyHostRequestBody;

  @Metadata()
  security: PutServerRedundancyHostSecurity;
}


export class PutServerRedundancyHostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
