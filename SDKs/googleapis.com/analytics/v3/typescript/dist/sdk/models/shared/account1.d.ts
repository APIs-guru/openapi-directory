import { SpeakeasyBase } from "../../../internal/utils";
import { AccountChildLink } from "./account";
/**
 * JSON template for Analytics account entry.
**/
export declare class Account1 extends SpeakeasyBase {
    childLink?: AccountChildLink;
    created?: Date;
    id?: string;
    kind?: string;
    name?: string;
    selfLink?: string;
    starred?: boolean;
    updated?: Date;
}
