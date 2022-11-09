import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BucketBundle } from "./bucketbundle";


export class GetBucketBundlesResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=bundles", elemType: shared.BucketBundle })
  bundles?: BucketBundle[];
}
