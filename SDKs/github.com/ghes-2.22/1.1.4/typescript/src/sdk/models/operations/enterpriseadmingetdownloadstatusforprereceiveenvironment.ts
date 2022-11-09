import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pre_receive_environment_id" })
  preReceiveEnvironmentId: number;
}


export class EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentPathParams;
}


export class EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  preReceiveEnvironmentDownloadStatus?: shared.PreReceiveEnvironmentDownloadStatus;
}
