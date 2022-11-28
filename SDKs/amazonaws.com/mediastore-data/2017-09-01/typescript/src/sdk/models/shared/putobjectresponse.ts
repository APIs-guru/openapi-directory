import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StorageClassEnum } from "./storageclassenum";



export class PutObjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContentSHA256" })
  contentSha256?: string;

  @SpeakeasyMetadata({ data: "json, name=ETag" })
  eTag?: string;

  @SpeakeasyMetadata({ data: "json, name=StorageClass" })
  storageClass?: StorageClassEnum;
}
