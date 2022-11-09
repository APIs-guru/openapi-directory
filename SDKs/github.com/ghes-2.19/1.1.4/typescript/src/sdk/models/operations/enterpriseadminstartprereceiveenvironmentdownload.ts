import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EnterpriseAdminStartPreReceiveEnvironmentDownloadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pre_receive_environment_id" })
  preReceiveEnvironmentId: number;
}


export class EnterpriseAdminStartPreReceiveEnvironmentDownloadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnterpriseAdminStartPreReceiveEnvironmentDownloadPathParams;
}


export class EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJsonErrors extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=resource" })
  resource?: string;
}


export class EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: operations.EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJsonErrors })
  errors?: EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJsonErrors[];

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class EnterpriseAdminStartPreReceiveEnvironmentDownloadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  enterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJsonObject?: EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJson;

  @Metadata()
  preReceiveEnvironmentDownloadStatus?: shared.PreReceiveEnvironmentDownloadStatus;
}
