import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Bucket } from "./bucket";


export class GetBucketsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=buckets", elemType: shared.Bucket })
  buckets?: Bucket[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
