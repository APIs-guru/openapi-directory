import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServerSideEncryption } from "./serversideencryption";
import { StorageClassEnum } from "./storageclassenum";
import { KeyValuePair } from "./keyvaluepair";



// S3Object
/** 
 * Provides information about the S3 object that a finding applies to.
**/
export class S3Object extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucketArn" })
  bucketArn?: string;

  @SpeakeasyMetadata({ data: "json, name=eTag" })
  eTag?: string;

  @SpeakeasyMetadata({ data: "json, name=extension" })
  extension?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=lastModified" })
  lastModified?: Date;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=publicAccess" })
  publicAccess?: boolean;

  @SpeakeasyMetadata({ data: "json, name=serverSideEncryption" })
  serverSideEncryption?: ServerSideEncryption;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=storageClass" })
  storageClass?: StorageClassEnum;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: KeyValuePair })
  tags?: KeyValuePair[];

  @SpeakeasyMetadata({ data: "json, name=versionId" })
  versionId?: string;
}
