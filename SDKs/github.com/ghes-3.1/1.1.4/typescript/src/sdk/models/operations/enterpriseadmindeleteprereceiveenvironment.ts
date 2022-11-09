import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EnterpriseAdminDeletePreReceiveEnvironmentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pre_receive_environment_id" })
  preReceiveEnvironmentId: number;
}


export class EnterpriseAdminDeletePreReceiveEnvironmentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnterpriseAdminDeletePreReceiveEnvironmentPathParams;
}


export class EnterpriseAdminDeletePreReceiveEnvironment422ApplicationJsonErrors extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=resource" })
  resource?: string;
}


export class EnterpriseAdminDeletePreReceiveEnvironment422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: operations.EnterpriseAdminDeletePreReceiveEnvironment422ApplicationJsonErrors })
  errors?: EnterpriseAdminDeletePreReceiveEnvironment422ApplicationJsonErrors[];

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class EnterpriseAdminDeletePreReceiveEnvironmentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  enterpriseAdminDeletePreReceiveEnvironment422ApplicationJsonObject?: EnterpriseAdminDeletePreReceiveEnvironment422ApplicationJson;
}
