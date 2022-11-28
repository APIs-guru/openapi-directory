import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateBucketBundleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucketName" })
  bucketName: string;

  @SpeakeasyMetadata({ data: "json, name=bundleId" })
  bundleId: string;
}
