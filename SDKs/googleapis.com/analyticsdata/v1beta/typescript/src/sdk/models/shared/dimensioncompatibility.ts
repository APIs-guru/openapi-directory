import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DimensionMetadata } from "./dimensionmetadata";


export enum DimensionCompatibilityCompatibilityEnum {
    CompatibilityUnspecified = "COMPATIBILITY_UNSPECIFIED",
    Compatible = "COMPATIBLE",
    Incompatible = "INCOMPATIBLE"
}


// DimensionCompatibility
/** 
 * The compatibility for a single dimension.
**/
export class DimensionCompatibility extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=compatibility" })
  compatibility?: DimensionCompatibilityCompatibilityEnum;

  @SpeakeasyMetadata({ data: "json, name=dimensionMetadata" })
  dimensionMetadata?: DimensionMetadata;
}
