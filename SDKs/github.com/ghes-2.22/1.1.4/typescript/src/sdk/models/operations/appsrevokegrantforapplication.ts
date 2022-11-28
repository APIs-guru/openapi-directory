import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AppsRevokeGrantForApplicationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=access_token" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=client_id" })
  clientId: string;
}


export class AppsRevokeGrantForApplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AppsRevokeGrantForApplicationPathParams;
}


export class AppsRevokeGrantForApplicationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
