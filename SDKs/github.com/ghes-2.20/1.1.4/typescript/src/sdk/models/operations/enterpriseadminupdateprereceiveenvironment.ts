import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EnterpriseAdminUpdatePreReceiveEnvironmentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pre_receive_environment_id" })
  preReceiveEnvironmentId: number;
}


export class EnterpriseAdminUpdatePreReceiveEnvironmentRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=image_url" })
  imageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJsonErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource?: string;
}


export class EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJsonErrors })
  errors?: EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJsonErrors[];

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class EnterpriseAdminUpdatePreReceiveEnvironmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EnterpriseAdminUpdatePreReceiveEnvironmentPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: EnterpriseAdminUpdatePreReceiveEnvironmentRequestBody;
}


export class EnterpriseAdminUpdatePreReceiveEnvironmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  enterpriseAdminUpdatePreReceiveEnvironment422ApplicationJsonObject?: EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJson;

  @SpeakeasyMetadata()
  preReceiveEnvironment?: shared.PreReceiveEnvironment;
}
