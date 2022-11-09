import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddVideoBlockPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: any;
}


export class AddVideoBlockSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class AddVideoBlockRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddVideoBlockPathParams;

  @Metadata()
  security: AddVideoBlockSecurity;
}


export class AddVideoBlockResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
