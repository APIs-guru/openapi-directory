import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EnterpriseAdminGetPreReceiveEnvironmentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pre_receive_environment_id" })
  preReceiveEnvironmentId: number;
}


export class EnterpriseAdminGetPreReceiveEnvironmentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnterpriseAdminGetPreReceiveEnvironmentPathParams;
}


export class EnterpriseAdminGetPreReceiveEnvironmentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  preReceiveEnvironment?: shared.PreReceiveEnvironment;
}
