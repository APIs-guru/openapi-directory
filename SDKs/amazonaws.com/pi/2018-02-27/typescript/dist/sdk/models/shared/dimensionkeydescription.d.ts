import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An array of descriptions and aggregated values for each dimension within a dimension group.
**/
export declare class DimensionKeyDescription extends SpeakeasyBase {
    dimensions?: Map<string, string>;
    partitions?: number[];
    total?: number;
}
