import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Dimension
/** 
 * The fields in this complex type define the dimension, or attributes, by which the associated customer service metric and benchmark data is measured. The value of dimensionKey gets set according to the configuration of the input request. The name and value pair further define dimension under the key.
**/
export class Dimension extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimensionKey" })
  dimensionKey?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
