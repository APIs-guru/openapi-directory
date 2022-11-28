import { SpeakeasyBase } from "../../../internal/utils";
/**
 * If <code>PartitionBy</code> was specified in a <code>DescribeDimensionKeys</code> request, the dimensions are returned in an array. Each element in the array specifies one dimension.
**/
export declare class ResponsePartitionKey extends SpeakeasyBase {
    dimensions: Map<string, string>;
}
