import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pre_receive_environment_id" })
  preReceiveEnvironmentId: number;
}


export class EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentPathParams;
}


export class EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  preReceiveEnvironmentDownloadStatus?: shared.PreReceiveEnvironmentDownloadStatus;
}
