import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionMetadata } from "./dimensionmetadata";
export declare enum DimensionCompatibilityCompatibilityEnum {
    CompatibilityUnspecified = "COMPATIBILITY_UNSPECIFIED",
    Compatible = "COMPATIBLE",
    Incompatible = "INCOMPATIBLE"
}
/**
 * The compatibility for a single dimension.
**/
export declare class DimensionCompatibility extends SpeakeasyBase {
    compatibility?: DimensionCompatibilityCompatibilityEnum;
    dimensionMetadata?: DimensionMetadata;
}
