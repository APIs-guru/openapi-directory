import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteBucketRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucketName" })
  bucketName: string;

  @Metadata({ data: "json, name=forceDelete" })
  forceDelete?: boolean;
}
