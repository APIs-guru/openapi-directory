import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DimensionKeyDescription
/** 
 * An array of descriptions and aggregated values for each dimension within a dimension group.
**/
export class DimensionKeyDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Dimensions" })
  dimensions?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Partitions" })
  partitions?: number[];

  @SpeakeasyMetadata({ data: "json, name=Total" })
  total?: number;
}
