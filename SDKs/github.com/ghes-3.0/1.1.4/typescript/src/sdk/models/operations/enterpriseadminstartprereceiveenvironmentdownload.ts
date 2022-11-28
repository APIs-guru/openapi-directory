import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EnterpriseAdminStartPreReceiveEnvironmentDownloadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pre_receive_environment_id" })
  preReceiveEnvironmentId: number;
}


export class EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJsonErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource?: string;
}


export class EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJsonErrors })
  errors?: EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJsonErrors[];

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class EnterpriseAdminStartPreReceiveEnvironmentDownloadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EnterpriseAdminStartPreReceiveEnvironmentDownloadPathParams;
}


export class EnterpriseAdminStartPreReceiveEnvironmentDownloadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  enterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJsonObject?: EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJson;

  @SpeakeasyMetadata()
  preReceiveEnvironmentDownloadStatus?: shared.PreReceiveEnvironmentDownloadStatus;
}
