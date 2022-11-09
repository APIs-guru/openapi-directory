import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Dimension
/** 
 * The fields in this complex type define the dimension, or attributes, by which the associated customer service metric and benchmark data is measured. The value of dimensionKey gets set according to the configuration of the input request. The name and value pair further define dimension under the key.
**/
export class Dimension extends SpeakeasyBase {
  @Metadata({ data: "json, name=dimensionKey" })
  dimensionKey?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
