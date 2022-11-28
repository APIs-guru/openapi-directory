import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies configuration for a core dump from the model container when the process crashes.
**/
export declare class ProductionVariantCoreDumpConfig extends SpeakeasyBase {
    destinationS3Uri: string;
    kmsKeyId?: string;
}
