import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ServerSideEncryption } from "./serversideencryption";
import { StorageClassEnum } from "./storageclassenum";
import { KeyValuePair } from "./keyvaluepair";


// S3Object
/** 
 * Provides information about the S3 object that a finding applies to.
**/
export class S3Object extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucketArn" })
  bucketArn?: string;

  @Metadata({ data: "json, name=eTag" })
  eTag?: string;

  @Metadata({ data: "json, name=extension" })
  extension?: string;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=lastModified" })
  lastModified?: Date;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=publicAccess" })
  publicAccess?: boolean;

  @Metadata({ data: "json, name=serverSideEncryption" })
  serverSideEncryption?: ServerSideEncryption;

  @Metadata({ data: "json, name=size" })
  size?: number;

  @Metadata({ data: "json, name=storageClass" })
  storageClass?: StorageClassEnum;

  @Metadata({ data: "json, name=tags", elemType: shared.KeyValuePair })
  tags?: KeyValuePair[];

  @Metadata({ data: "json, name=versionId" })
  versionId?: string;
}
