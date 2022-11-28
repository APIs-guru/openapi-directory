import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationVariables } from "./configurationvariables";
import { ManagedProperty } from "./managedproperty";
/**
 * A managed configuration resource contains the set of managed properties defined by the app developer in the app's managed configurations schema, as well as any configuration variables defined for the user.
**/
export declare class ManagedConfiguration extends SpeakeasyBase {
    configurationVariables?: ConfigurationVariables;
    kind?: string;
    managedProperty?: ManagedProperty[];
    productId?: string;
}
