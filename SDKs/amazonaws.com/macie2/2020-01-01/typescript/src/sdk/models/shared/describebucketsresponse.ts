import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BucketMetadata } from "./bucketmetadata";


export class DescribeBucketsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=buckets", elemType: shared.BucketMetadata })
  buckets?: BucketMetadata[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
