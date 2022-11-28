import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationVariables } from "./configurationvariables";
import { ManagedProperty } from "./managedproperty";



// ManagedConfiguration
/** 
 * A managed configuration resource contains the set of managed properties defined by the app developer in the app's managed configurations schema, as well as any configuration variables defined for the user.
**/
export class ManagedConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configurationVariables" })
  configurationVariables?: ConfigurationVariables;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=managedProperty", elemType: ManagedProperty })
  managedProperty?: ManagedProperty[];

  @SpeakeasyMetadata({ data: "json, name=productId" })
  productId?: string;
}
