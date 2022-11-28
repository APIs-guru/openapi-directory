import { SpeakeasyBase } from "../../../internal/utils";
import { Bucket } from "./bucket";
import { Operation } from "./operation";
export declare class CreateBucketResult extends SpeakeasyBase {
    bucket?: Bucket;
    operations?: Operation[];
}
