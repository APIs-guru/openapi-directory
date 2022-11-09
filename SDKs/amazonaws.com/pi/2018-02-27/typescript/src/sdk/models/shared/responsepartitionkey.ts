import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ResponsePartitionKey
/** 
 * If <code>PartitionBy</code> was specified in a <code>DescribeDimensionKeys</code> request, the dimensions are returned in an array. Each element in the array specifies one dimension. 
**/
export class ResponsePartitionKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=Dimensions" })
  dimensions: Map<string, string>;
}
