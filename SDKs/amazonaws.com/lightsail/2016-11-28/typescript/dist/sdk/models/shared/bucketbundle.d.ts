import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Describes the specifications of a bundle that can be applied to an Amazon Lightsail bucket.</p> <p>A bucket bundle specifies the monthly cost, storage space, and data transfer quota for a bucket.</p>
**/
export declare class BucketBundle extends SpeakeasyBase {
    bundleId?: string;
    isActive?: boolean;
    name?: string;
    price?: number;
    storagePerMonthInGb?: number;
    transferPerMonthInGb?: number;
}
