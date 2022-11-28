import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A complex type that contains a value, plus the veracity of that value.
**/
export declare class Value extends SpeakeasyBase {
    applicable?: boolean;
    value?: Map<string, any>;
}
