import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeValueTarget } from "./attributevaluetarget";
/**
 * A name value pair that describes an aspect of an account.
**/
export declare class AccountAttribute extends SpeakeasyBase {
    attributeName?: string;
    attributeValues?: AttributeValueTarget[];
}
