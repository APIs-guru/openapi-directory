import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchRemoteServersIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum PatchRemoteServersIdRequestBodyOneDriveAccountTypeEnum {
    Personal = "personal",
    BusinessOther = "business_other"
}

export enum PatchRemoteServersIdRequestBodyServerCertificateEnum {
    RequireMatch = "require_match",
    AllowAny = "allow_any"
}

export enum PatchRemoteServersIdRequestBodyServerTypeEnum {
    Ftp = "ftp",
    Sftp = "sftp",
    S3 = "s3",
    GoogleCloudStorage = "google_cloud_storage",
    Webdav = "webdav",
    Wasabi = "wasabi",
    BackblazeB2 = "backblaze_b2",
    OneDrive = "one_drive",
    Rackspace = "rackspace",
    Box = "box",
    Dropbox = "dropbox",
    GoogleDrive = "google_drive",
    Azure = "azure",
    Sharepoint = "sharepoint",
    S3Compatible = "s3_compatible"
}

export enum PatchRemoteServersIdRequestBodySslEnum {
    IfAvailable = "if_available",
    Require = "require",
    RequireImplicit = "require_implicit",
    Never = "never"
}


export class PatchRemoteServersIdRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=aws_access_key" })
  awsAccessKey?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=aws_secret_key" })
  awsSecretKey?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=azure_blob_storage_access_key" })
  azureBlobStorageAccessKey?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=azure_blob_storage_account" })
  azureBlobStorageAccount?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=azure_blob_storage_container" })
  azureBlobStorageContainer?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=backblaze_b2_application_key" })
  backblazeB2ApplicationKey?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=backblaze_b2_bucket" })
  backblazeB2Bucket?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=backblaze_b2_key_id" })
  backblazeB2KeyId?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=backblaze_b2_s3_endpoint" })
  backblazeB2S3Endpoint?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=enable_dedicated_ips" })
  enableDedicatedIps?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=google_cloud_storage_bucket" })
  googleCloudStorageBucket?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=google_cloud_storage_credentials_json" })
  googleCloudStorageCredentialsJson?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=google_cloud_storage_project_id" })
  googleCloudStorageProjectId?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=hostname" })
  hostname?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=max_connections" })
  maxConnections?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=one_drive_account_type" })
  oneDriveAccountType?: PatchRemoteServersIdRequestBodyOneDriveAccountTypeEnum;

  @SpeakeasyMetadata({ data: "multipart_form, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=port" })
  port?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=private_key" })
  privateKey?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=rackspace_api_key" })
  rackspaceApiKey?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=rackspace_container" })
  rackspaceContainer?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=rackspace_region" })
  rackspaceRegion?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=rackspace_username" })
  rackspaceUsername?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=reset_authentication" })
  resetAuthentication?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=s3_bucket" })
  s3Bucket?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=s3_compatible_access_key" })
  s3CompatibleAccessKey?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=s3_compatible_bucket" })
  s3CompatibleBucket?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=s3_compatible_endpoint" })
  s3CompatibleEndpoint?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=s3_compatible_region" })
  s3CompatibleRegion?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=s3_compatible_secret_key" })
  s3CompatibleSecretKey?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=s3_region" })
  s3Region?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=server_certificate" })
  serverCertificate?: PatchRemoteServersIdRequestBodyServerCertificateEnum;

  @SpeakeasyMetadata({ data: "multipart_form, name=server_host_key" })
  serverHostKey?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=server_type" })
  serverType?: PatchRemoteServersIdRequestBodyServerTypeEnum;

  @SpeakeasyMetadata({ data: "multipart_form, name=ssl" })
  ssl?: PatchRemoteServersIdRequestBodySslEnum;

  @SpeakeasyMetadata({ data: "multipart_form, name=ssl_certificate" })
  sslCertificate?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=username" })
  username?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=wasabi_access_key" })
  wasabiAccessKey?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=wasabi_bucket" })
  wasabiBucket?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=wasabi_region" })
  wasabiRegion?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=wasabi_secret_key" })
  wasabiSecretKey?: string;
}


export class PatchRemoteServersIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchRemoteServersIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: PatchRemoteServersIdRequestBody;
}


export class PatchRemoteServersIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  remoteServerEntity?: shared.RemoteServerEntity;

  @SpeakeasyMetadata()
  statusCode: number;
}
