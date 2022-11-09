import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetBucketAccessKeysRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucketName" })
  bucketName: string;
}
