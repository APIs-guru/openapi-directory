import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PostRemoteServersRequestBodyOneDriveAccountTypeEnum {
    Personal = "personal",
    BusinessOther = "business_other"
}
export declare enum PostRemoteServersRequestBodyServerCertificateEnum {
    RequireMatch = "require_match",
    AllowAny = "allow_any"
}
export declare enum PostRemoteServersRequestBodyServerTypeEnum {
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
export declare enum PostRemoteServersRequestBodySslEnum {
    IfAvailable = "if_available",
    Require = "require",
    RequireImplicit = "require_implicit",
    Never = "never"
}
export declare class PostRemoteServersRequestBody extends SpeakeasyBase {
    awsAccessKey?: string;
    awsSecretKey?: string;
    azureBlobStorageAccessKey?: string;
    azureBlobStorageAccount?: string;
    azureBlobStorageContainer?: string;
    backblazeB2ApplicationKey?: string;
    backblazeB2Bucket?: string;
    backblazeB2KeyId?: string;
    backblazeB2S3Endpoint?: string;
    enableDedicatedIps?: boolean;
    googleCloudStorageBucket?: string;
    googleCloudStorageCredentialsJson?: string;
    googleCloudStorageProjectId?: string;
    hostname?: string;
    maxConnections?: number;
    name?: string;
    oneDriveAccountType?: PostRemoteServersRequestBodyOneDriveAccountTypeEnum;
    password?: string;
    port?: number;
    privateKey?: string;
    rackspaceApiKey?: string;
    rackspaceContainer?: string;
    rackspaceRegion?: string;
    rackspaceUsername?: string;
    resetAuthentication?: boolean;
    s3Bucket?: string;
    s3CompatibleAccessKey?: string;
    s3CompatibleBucket?: string;
    s3CompatibleEndpoint?: string;
    s3CompatibleRegion?: string;
    s3CompatibleSecretKey?: string;
    s3Region?: string;
    serverCertificate?: PostRemoteServersRequestBodyServerCertificateEnum;
    serverHostKey?: string;
    serverType?: PostRemoteServersRequestBodyServerTypeEnum;
    ssl?: PostRemoteServersRequestBodySslEnum;
    sslCertificate?: string;
    username?: string;
    wasabiAccessKey?: string;
    wasabiBucket?: string;
    wasabiRegion?: string;
    wasabiSecretKey?: string;
}
export declare class PostRemoteServersRequest extends SpeakeasyBase {
    request?: PostRemoteServersRequestBody;
}
export declare class PostRemoteServersResponse extends SpeakeasyBase {
    contentType: string;
    remoteServerEntity?: shared.RemoteServerEntity;
    statusCode: number;
}
