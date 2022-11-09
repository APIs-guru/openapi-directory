import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateBucketAccessKeyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucketName" })
  bucketName: string;
}
