import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetBucketAccessKeysRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucketName" })
  bucketName: string;
}
