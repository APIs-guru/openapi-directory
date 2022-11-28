import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Bucket } from "./bucket";



export class GetBucketsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buckets", elemType: Bucket })
  buckets?: Bucket[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
