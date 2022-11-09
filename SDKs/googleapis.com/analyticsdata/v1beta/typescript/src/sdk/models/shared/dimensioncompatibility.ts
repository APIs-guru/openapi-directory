import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DimensionMetadata } from "./dimensionmetadata";

export enum DimensionCompatibilityCompatibilityEnum {
    CompatibilityUnspecified = "COMPATIBILITY_UNSPECIFIED"
,    Compatible = "COMPATIBLE"
,    Incompatible = "INCOMPATIBLE"
}


// DimensionCompatibility
/** 
 * The compatibility for a single dimension.
**/
export class DimensionCompatibility extends SpeakeasyBase {
  @Metadata({ data: "json, name=compatibility" })
  compatibility?: DimensionCompatibilityCompatibilityEnum;

  @Metadata({ data: "json, name=dimensionMetadata" })
  dimensionMetadata?: DimensionMetadata;
}
