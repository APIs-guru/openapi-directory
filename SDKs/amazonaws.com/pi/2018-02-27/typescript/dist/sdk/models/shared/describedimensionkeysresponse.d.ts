import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionKeyDescription } from "./dimensionkeydescription";
import { ResponsePartitionKey } from "./responsepartitionkey";
export declare class DescribeDimensionKeysResponse extends SpeakeasyBase {
    alignedEndTime?: Date;
    alignedStartTime?: Date;
    keys?: DimensionKeyDescription[];
    nextToken?: string;
    partitionKeys?: ResponsePartitionKey[];
}
