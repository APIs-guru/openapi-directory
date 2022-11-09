import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum RemoteServerEntityAuthStatusEnum {
    NotApplicable = "not_applicable"
,    InSetup = "in_setup"
,    Complete = "complete"
,    Reauthenticate = "reauthenticate"
}

export enum RemoteServerEntityOneDriveAccountTypeEnum {
    Personal = "personal"
,    BusinessOther = "business_other"
}

export enum RemoteServerEntityServerCertificateEnum {
    RequireMatch = "require_match"
,    AllowAny = "allow_any"
}

export enum RemoteServerEntityServerTypeEnum {
    Ftp = "ftp"
,    Sftp = "sftp"
,    S3 = "s3"
,    GoogleCloudStorage = "google_cloud_storage"
,    Webdav = "webdav"
,    Wasabi = "wasabi"
,    BackblazeB2 = "backblaze_b2"
,    OneDrive = "one_drive"
,    Rackspace = "rackspace"
,    Box = "box"
,    Dropbox = "dropbox"
,    GoogleDrive = "google_drive"
,    Azure = "azure"
,    Sharepoint = "sharepoint"
,    S3Compatible = "s3_compatible"
}

export enum RemoteServerEntitySslEnum {
    IfAvailable = "if_available"
,    Require = "require"
,    RequireImplicit = "require_implicit"
,    Never = "never"
}


// RemoteServerEntity
/** 
 * Create Remote Server
**/
export class RemoteServerEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=auth_account_name" })
  authAccountName?: string;

  @Metadata({ data: "json, name=auth_setup_link" })
  authSetupLink?: string;

  @Metadata({ data: "json, name=auth_status" })
  authStatus?: RemoteServerEntityAuthStatusEnum;

  @Metadata({ data: "json, name=authentication_method" })
  authenticationMethod?: string;

  @Metadata({ data: "json, name=azure_blob_storage_account" })
  azureBlobStorageAccount?: string;

  @Metadata({ data: "json, name=azure_blob_storage_container" })
  azureBlobStorageContainer?: string;

  @Metadata({ data: "json, name=backblaze_b2_bucket" })
  backblazeB2Bucket?: string;

  @Metadata({ data: "json, name=backblaze_b2_s3_endpoint" })
  backblazeB2S3Endpoint?: string;

  @Metadata({ data: "json, name=enable_dedicated_ips" })
  enableDedicatedIps?: boolean;

  @Metadata({ data: "json, name=google_cloud_storage_bucket" })
  googleCloudStorageBucket?: string;

  @Metadata({ data: "json, name=google_cloud_storage_project_id" })
  googleCloudStorageProjectId?: string;

  @Metadata({ data: "json, name=hostname" })
  hostname?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=max_connections" })
  maxConnections?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=one_drive_account_type" })
  oneDriveAccountType?: RemoteServerEntityOneDriveAccountTypeEnum;

  @Metadata({ data: "json, name=port" })
  port?: number;

  @Metadata({ data: "json, name=rackspace_container" })
  rackspaceContainer?: string;

  @Metadata({ data: "json, name=rackspace_region" })
  rackspaceRegion?: string;

  @Metadata({ data: "json, name=rackspace_username" })
  rackspaceUsername?: string;

  @Metadata({ data: "json, name=remote_home_path" })
  remoteHomePath?: string;

  @Metadata({ data: "json, name=s3_bucket" })
  s3Bucket?: string;

  @Metadata({ data: "json, name=s3_compatible_bucket" })
  s3CompatibleBucket?: string;

  @Metadata({ data: "json, name=s3_compatible_endpoint" })
  s3CompatibleEndpoint?: string;

  @Metadata({ data: "json, name=s3_compatible_region" })
  s3CompatibleRegion?: string;

  @Metadata({ data: "json, name=s3_region" })
  s3Region?: string;

  @Metadata({ data: "json, name=server_certificate" })
  serverCertificate?: RemoteServerEntityServerCertificateEnum;

  @Metadata({ data: "json, name=server_host_key" })
  serverHostKey?: string;

  @Metadata({ data: "json, name=server_type" })
  serverType?: RemoteServerEntityServerTypeEnum;

  @Metadata({ data: "json, name=ssl" })
  ssl?: RemoteServerEntitySslEnum;

  @Metadata({ data: "json, name=username" })
  username?: string;

  @Metadata({ data: "json, name=wasabi_bucket" })
  wasabiBucket?: string;

  @Metadata({ data: "json, name=wasabi_region" })
  wasabiRegion?: string;
}
