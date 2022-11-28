import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddVideoBlockPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: any;
}


export class AddVideoBlockSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class AddVideoBlockRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddVideoBlockPathParams;

  @SpeakeasyMetadata()
  security: AddVideoBlockSecurity;
}


export class AddVideoBlockResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
