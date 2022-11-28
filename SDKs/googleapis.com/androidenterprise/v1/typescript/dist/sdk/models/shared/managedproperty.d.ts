import { SpeakeasyBase } from "../../../internal/utils";
import { ManagedPropertyBundle } from "./managedpropertybundle";
/**
 * A managed property of a managed configuration. The property must match one of the properties in the app restrictions schema of the product. Exactly one of the value fields must be populated, and it must match the property's type in the app restrictions schema.
**/
export declare class ManagedProperty extends SpeakeasyBase {
    key?: string;
    valueBool?: boolean;
    valueBundle?: ManagedPropertyBundle;
    valueBundleArray?: ManagedPropertyBundle[];
    valueInteger?: number;
    valueString?: string;
    valueStringArray?: string[];
}
