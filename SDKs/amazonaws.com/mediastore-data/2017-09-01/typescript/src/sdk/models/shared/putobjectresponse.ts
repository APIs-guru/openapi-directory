import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StorageClassEnum } from "./storageclassenum";


export class PutObjectResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContentSHA256" })
  contentSha256?: string;

  @Metadata({ data: "json, name=ETag" })
  eTag?: string;

  @Metadata({ data: "json, name=StorageClass" })
  storageClass?: StorageClassEnum;
}
