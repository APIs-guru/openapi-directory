import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ActionsDeleteOrgSecretPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=secret_name" })
  secretName: string;
}


export class ActionsDeleteOrgSecretRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsDeleteOrgSecretPathParams;
}


export class ActionsDeleteOrgSecretResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
