import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AppsRevokeAuthorizationForApplicationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=access_token" })
  accessToken: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=client_id" })
  clientId: string;
}


export class AppsRevokeAuthorizationForApplicationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AppsRevokeAuthorizationForApplicationPathParams;
}


export class AppsRevokeAuthorizationForApplicationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
