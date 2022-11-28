import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateBucketAccessKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucketName" })
  bucketName: string;
}
