import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RemoteServerEntityAuthStatusEnum {
    NotApplicable = "not_applicable",
    InSetup = "in_setup",
    Complete = "complete",
    Reauthenticate = "reauthenticate"
}

export enum RemoteServerEntityOneDriveAccountTypeEnum {
    Personal = "personal",
    BusinessOther = "business_other"
}

export enum RemoteServerEntityServerCertificateEnum {
    RequireMatch = "require_match",
    AllowAny = "allow_any"
}

export enum RemoteServerEntityServerTypeEnum {
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

export enum RemoteServerEntitySslEnum {
    IfAvailable = "if_available",
    Require = "require",
    RequireImplicit = "require_implicit",
    Never = "never"
}


// RemoteServerEntity
/** 
 * Create Remote Server
**/
export class RemoteServerEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auth_account_name" })
  authAccountName?: string;

  @SpeakeasyMetadata({ data: "json, name=auth_setup_link" })
  authSetupLink?: string;

  @SpeakeasyMetadata({ data: "json, name=auth_status" })
  authStatus?: RemoteServerEntityAuthStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=authentication_method" })
  authenticationMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=azure_blob_storage_account" })
  azureBlobStorageAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=azure_blob_storage_container" })
  azureBlobStorageContainer?: string;

  @SpeakeasyMetadata({ data: "json, name=backblaze_b2_bucket" })
  backblazeB2Bucket?: string;

  @SpeakeasyMetadata({ data: "json, name=backblaze_b2_s3_endpoint" })
  backblazeB2S3Endpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=enable_dedicated_ips" })
  enableDedicatedIps?: boolean;

  @SpeakeasyMetadata({ data: "json, name=google_cloud_storage_bucket" })
  googleCloudStorageBucket?: string;

  @SpeakeasyMetadata({ data: "json, name=google_cloud_storage_project_id" })
  googleCloudStorageProjectId?: string;

  @SpeakeasyMetadata({ data: "json, name=hostname" })
  hostname?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=max_connections" })
  maxConnections?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=one_drive_account_type" })
  oneDriveAccountType?: RemoteServerEntityOneDriveAccountTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=rackspace_container" })
  rackspaceContainer?: string;

  @SpeakeasyMetadata({ data: "json, name=rackspace_region" })
  rackspaceRegion?: string;

  @SpeakeasyMetadata({ data: "json, name=rackspace_username" })
  rackspaceUsername?: string;

  @SpeakeasyMetadata({ data: "json, name=remote_home_path" })
  remoteHomePath?: string;

  @SpeakeasyMetadata({ data: "json, name=s3_bucket" })
  s3Bucket?: string;

  @SpeakeasyMetadata({ data: "json, name=s3_compatible_bucket" })
  s3CompatibleBucket?: string;

  @SpeakeasyMetadata({ data: "json, name=s3_compatible_endpoint" })
  s3CompatibleEndpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=s3_compatible_region" })
  s3CompatibleRegion?: string;

  @SpeakeasyMetadata({ data: "json, name=s3_region" })
  s3Region?: string;

  @SpeakeasyMetadata({ data: "json, name=server_certificate" })
  serverCertificate?: RemoteServerEntityServerCertificateEnum;

  @SpeakeasyMetadata({ data: "json, name=server_host_key" })
  serverHostKey?: string;

  @SpeakeasyMetadata({ data: "json, name=server_type" })
  serverType?: RemoteServerEntityServerTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ssl" })
  ssl?: RemoteServerEntitySslEnum;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;

  @SpeakeasyMetadata({ data: "json, name=wasabi_bucket" })
  wasabiBucket?: string;

  @SpeakeasyMetadata({ data: "json, name=wasabi_region" })
  wasabiRegion?: string;
}
