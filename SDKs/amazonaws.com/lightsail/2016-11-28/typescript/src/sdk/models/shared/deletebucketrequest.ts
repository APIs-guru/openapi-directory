import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteBucketRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucketName" })
  bucketName: string;

  @SpeakeasyMetadata({ data: "json, name=forceDelete" })
  forceDelete?: boolean;
}
