import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The fields in this complex type define the dimension, or attributes, by which the associated customer service metric and benchmark data is measured. The value of dimensionKey gets set according to the configuration of the input request. The name and value pair further define dimension under the key.
**/
export declare class Dimension extends SpeakeasyBase {
    dimensionKey?: string;
    name?: string;
    value?: string;
}
