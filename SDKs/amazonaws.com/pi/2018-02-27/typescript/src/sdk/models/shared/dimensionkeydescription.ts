import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DimensionKeyDescription
/** 
 * An array of descriptions and aggregated values for each dimension within a dimension group.
**/
export class DimensionKeyDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=Dimensions" })
  dimensions?: Map<string, string>;

  @Metadata({ data: "json, name=Partitions" })
  partitions?: number[];

  @Metadata({ data: "json, name=Total" })
  total?: number;
}
