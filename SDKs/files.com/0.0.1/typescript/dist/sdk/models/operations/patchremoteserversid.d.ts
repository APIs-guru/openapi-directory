import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchRemoteServersIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare enum PatchRemoteServersIdRequestBodyOneDriveAccountTypeEnum {
    Personal = "personal",
    BusinessOther = "business_other"
}
export declare enum PatchRemoteServersIdRequestBodyServerCertificateEnum {
    RequireMatch = "require_match",
    AllowAny = "allow_any"
}
export declare enum PatchRemoteServersIdRequestBodyServerTypeEnum {
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
export declare enum PatchRemoteServersIdRequestBodySslEnum {
    IfAvailable = "if_available",
    Require = "require",
    RequireImplicit = "require_implicit",
    Never = "never"
}
export declare class PatchRemoteServersIdRequestBody extends SpeakeasyBase {
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
    oneDriveAccountType?: PatchRemoteServersIdRequestBodyOneDriveAccountTypeEnum;
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
    serverCertificate?: PatchRemoteServersIdRequestBodyServerCertificateEnum;
    serverHostKey?: string;
    serverType?: PatchRemoteServersIdRequestBodyServerTypeEnum;
    ssl?: PatchRemoteServersIdRequestBodySslEnum;
    sslCertificate?: string;
    username?: string;
    wasabiAccessKey?: string;
    wasabiBucket?: string;
    wasabiRegion?: string;
    wasabiSecretKey?: string;
}
export declare class PatchRemoteServersIdRequest extends SpeakeasyBase {
    pathParams: PatchRemoteServersIdPathParams;
    request?: PatchRemoteServersIdRequestBody;
}
export declare class PatchRemoteServersIdResponse extends SpeakeasyBase {
    contentType: string;
    remoteServerEntity?: shared.RemoteServerEntity;
    statusCode: number;
}
