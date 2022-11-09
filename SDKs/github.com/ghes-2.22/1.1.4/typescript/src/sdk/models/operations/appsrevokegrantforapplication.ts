import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AppsRevokeGrantForApplicationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=access_token" })
  accessToken: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=client_id" })
  clientId: string;
}


export class AppsRevokeGrantForApplicationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AppsRevokeGrantForApplicationPathParams;
}


export class AppsRevokeGrantForApplicationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
