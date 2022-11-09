import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ActionsDeleteOrgSecretPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=secret_name" })
  secretName: string;
}


export class ActionsDeleteOrgSecretRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsDeleteOrgSecretPathParams;
}


export class ActionsDeleteOrgSecretResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
