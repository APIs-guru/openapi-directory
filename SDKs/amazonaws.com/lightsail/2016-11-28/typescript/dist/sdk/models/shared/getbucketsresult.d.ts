import { SpeakeasyBase } from "../../../internal/utils";
import { Bucket } from "./bucket";
export declare class GetBucketsResult extends SpeakeasyBase {
    buckets?: Bucket[];
    nextPageToken?: string;
}
