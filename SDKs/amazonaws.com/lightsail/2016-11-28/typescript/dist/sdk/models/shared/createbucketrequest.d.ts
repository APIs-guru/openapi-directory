import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class CreateBucketRequest extends SpeakeasyBase {
    bucketName: string;
    bundleId: string;
    enableObjectVersioning?: boolean;
    tags?: Tag[];
}
