import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ExistsSpaceNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class ExistsSpaceNameSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class ExistsSpaceNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ExistsSpaceNamePathParams;

  @Metadata()
  security: ExistsSpaceNameSecurity;
}


export class ExistsSpaceNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
