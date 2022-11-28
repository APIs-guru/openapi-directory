import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AppsRevokeAuthorizationForApplicationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=access_token" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=client_id" })
  clientId: string;
}


export class AppsRevokeAuthorizationForApplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AppsRevokeAuthorizationForApplicationPathParams;
}


export class AppsRevokeAuthorizationForApplicationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
