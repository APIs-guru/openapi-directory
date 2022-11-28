import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutServerRedundancyHostPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=host" })
  host: string;
}


export class PutServerRedundancyHostRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=redundancyAllowed" })
  redundancyAllowed: boolean;
}


export class PutServerRedundancyHostSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PutServerRedundancyHostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutServerRedundancyHostPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutServerRedundancyHostRequestBody;

  @SpeakeasyMetadata()
  security: PutServerRedundancyHostSecurity;
}


export class PutServerRedundancyHostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
