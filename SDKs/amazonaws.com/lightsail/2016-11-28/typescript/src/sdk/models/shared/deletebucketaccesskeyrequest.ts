import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteBucketAccessKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessKeyId" })
  accessKeyId: string;

  @SpeakeasyMetadata({ data: "json, name=bucketName" })
  bucketName: string;
}
