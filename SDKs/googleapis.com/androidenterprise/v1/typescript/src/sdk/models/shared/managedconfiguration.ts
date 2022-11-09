import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConfigurationVariables } from "./configurationvariables";
import { ManagedProperty } from "./managedproperty";


// ManagedConfiguration
/** 
 * A managed configuration resource contains the set of managed properties defined by the app developer in the app's managed configurations schema, as well as any configuration variables defined for the user.
**/
export class ManagedConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=configurationVariables" })
  configurationVariables?: ConfigurationVariables;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=managedProperty", elemType: shared.ManagedProperty })
  managedProperty?: ManagedProperty[];

  @Metadata({ data: "json, name=productId" })
  productId?: string;
}
