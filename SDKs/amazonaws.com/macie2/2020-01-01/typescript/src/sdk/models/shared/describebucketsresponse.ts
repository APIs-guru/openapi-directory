import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BucketMetadata } from "./bucketmetadata";



export class DescribeBucketsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buckets", elemType: BucketMetadata })
  buckets?: BucketMetadata[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
