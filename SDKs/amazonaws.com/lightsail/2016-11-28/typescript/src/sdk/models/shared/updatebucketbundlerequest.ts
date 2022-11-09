import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateBucketBundleRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucketName" })
  bucketName: string;

  @Metadata({ data: "json, name=bundleId" })
  bundleId: string;
}
