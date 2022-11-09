import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EnterpriseAdminUpdatePreReceiveEnvironmentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pre_receive_environment_id" })
  preReceiveEnvironmentId: number;
}


export class EnterpriseAdminUpdatePreReceiveEnvironmentRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=image_url" })
  imageUrl?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class EnterpriseAdminUpdatePreReceiveEnvironmentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnterpriseAdminUpdatePreReceiveEnvironmentPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: EnterpriseAdminUpdatePreReceiveEnvironmentRequestBody;
}


export class EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJsonErrors extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=resource" })
  resource?: string;
}


export class EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: operations.EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJsonErrors })
  errors?: EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJsonErrors[];

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class EnterpriseAdminUpdatePreReceiveEnvironmentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  enterpriseAdminUpdatePreReceiveEnvironment422ApplicationJsonObject?: EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJson;

  @Metadata()
  preReceiveEnvironment?: shared.PreReceiveEnvironment;
}
