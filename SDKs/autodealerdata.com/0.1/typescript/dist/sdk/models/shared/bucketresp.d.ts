import { SpeakeasyBase } from "../../../internal/utils";
import { BucketEntry } from "./bucketentry";
export declare class BucketResp extends SpeakeasyBase {
    brandName?: string;
    cacheTimeLimit?: number;
    condition?: string;
    data: BucketEntry[];
    modelName?: string;
    msg?: string;
    regionName?: string;
}
