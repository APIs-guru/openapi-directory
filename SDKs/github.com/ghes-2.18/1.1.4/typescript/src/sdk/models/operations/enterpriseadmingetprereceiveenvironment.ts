import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EnterpriseAdminGetPreReceiveEnvironmentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pre_receive_environment_id" })
  preReceiveEnvironmentId: number;
}


export class EnterpriseAdminGetPreReceiveEnvironmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EnterpriseAdminGetPreReceiveEnvironmentPathParams;
}


export class EnterpriseAdminGetPreReceiveEnvironmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  preReceiveEnvironment?: shared.PreReceiveEnvironment;
}
