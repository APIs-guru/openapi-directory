import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BucketBundle } from "./bucketbundle";



export class GetBucketBundlesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bundles", elemType: BucketBundle })
  bundles?: BucketBundle[];
}
