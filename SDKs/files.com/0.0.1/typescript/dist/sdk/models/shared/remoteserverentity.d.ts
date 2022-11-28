import { SpeakeasyBase } from "../../../internal/utils";
export declare enum RemoteServerEntityAuthStatusEnum {
    NotApplicable = "not_applicable",
    InSetup = "in_setup",
    Complete = "complete",
    Reauthenticate = "reauthenticate"
}
export declare enum RemoteServerEntityOneDriveAccountTypeEnum {
    Personal = "personal",
    BusinessOther = "business_other"
}
export declare enum RemoteServerEntityServerCertificateEnum {
    RequireMatch = "require_match",
    AllowAny = "allow_any"
}
export declare enum RemoteServerEntityServerTypeEnum {
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
export declare enum RemoteServerEntitySslEnum {
    IfAvailable = "if_available",
    Require = "require",
    RequireImplicit = "require_implicit",
    Never = "never"
}
/**
 * Create Remote Server
**/
export declare class RemoteServerEntity extends SpeakeasyBase {
    authAccountName?: string;
    authSetupLink?: string;
    authStatus?: RemoteServerEntityAuthStatusEnum;
    authenticationMethod?: string;
    azureBlobStorageAccount?: string;
    azureBlobStorageContainer?: string;
    backblazeB2Bucket?: string;
    backblazeB2S3Endpoint?: string;
    enableDedicatedIps?: boolean;
    googleCloudStorageBucket?: string;
    googleCloudStorageProjectId?: string;
    hostname?: string;
    id?: number;
    maxConnections?: number;
    name?: string;
    oneDriveAccountType?: RemoteServerEntityOneDriveAccountTypeEnum;
    port?: number;
    rackspaceContainer?: string;
    rackspaceRegion?: string;
    rackspaceUsername?: string;
    remoteHomePath?: string;
    s3Bucket?: string;
    s3CompatibleBucket?: string;
    s3CompatibleEndpoint?: string;
    s3CompatibleRegion?: string;
    s3Region?: string;
    serverCertificate?: RemoteServerEntityServerCertificateEnum;
    serverHostKey?: string;
    serverType?: RemoteServerEntityServerTypeEnum;
    ssl?: RemoteServerEntitySslEnum;
    username?: string;
    wasabiBucket?: string;
    wasabiRegion?: string;
}
