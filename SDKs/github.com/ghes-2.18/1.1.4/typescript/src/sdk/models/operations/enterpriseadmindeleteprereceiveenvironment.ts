import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EnterpriseAdminDeletePreReceiveEnvironmentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pre_receive_environment_id" })
  preReceiveEnvironmentId: number;
}


export class EnterpriseAdminDeletePreReceiveEnvironment422ApplicationJsonErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource?: string;
}


export class EnterpriseAdminDeletePreReceiveEnvironment422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: EnterpriseAdminDeletePreReceiveEnvironment422ApplicationJsonErrors })
  errors?: EnterpriseAdminDeletePreReceiveEnvironment422ApplicationJsonErrors[];

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class EnterpriseAdminDeletePreReceiveEnvironmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EnterpriseAdminDeletePreReceiveEnvironmentPathParams;
}


export class EnterpriseAdminDeletePreReceiveEnvironmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  enterpriseAdminDeletePreReceiveEnvironment422ApplicationJsonObject?: EnterpriseAdminDeletePreReceiveEnvironment422ApplicationJson;
}
