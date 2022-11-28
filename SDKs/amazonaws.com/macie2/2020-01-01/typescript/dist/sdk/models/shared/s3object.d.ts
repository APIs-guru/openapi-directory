import { SpeakeasyBase } from "../../../internal/utils";
import { ServerSideEncryption } from "./serversideencryption";
import { StorageClassEnum } from "./storageclassenum";
import { KeyValuePair } from "./keyvaluepair";
/**
 * Provides information about the S3 object that a finding applies to.
**/
export declare class S3Object extends SpeakeasyBase {
    bucketArn?: string;
    eTag?: string;
    extension?: string;
    key?: string;
    lastModified?: Date;
    path?: string;
    publicAccess?: boolean;
    serverSideEncryption?: ServerSideEncryption;
    size?: number;
    storageClass?: StorageClassEnum;
    tags?: KeyValuePair[];
    versionId?: string;
}
