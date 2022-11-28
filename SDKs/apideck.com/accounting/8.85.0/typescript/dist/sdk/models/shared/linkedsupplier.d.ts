import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
/**
 * The supplier this entity is linked to.
**/
export declare class LinkedSupplier extends SpeakeasyBase {
    address?: Address;
    companyName?: string;
    displayName?: string;
    id: string;
}
/**
 * The supplier this entity is linked to.
**/
export declare class LinkedSupplierInput extends SpeakeasyBase {
    address?: Address;
    displayName?: string;
    id: string;
}
