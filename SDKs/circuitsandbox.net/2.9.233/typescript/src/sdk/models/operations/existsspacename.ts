import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ExistsSpaceNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class ExistsSpaceNameSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class ExistsSpaceNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ExistsSpaceNamePathParams;

  @SpeakeasyMetadata()
  security: ExistsSpaceNameSecurity;
}


export class ExistsSpaceNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
