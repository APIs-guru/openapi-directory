import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ManagedProperty } from "./managedproperty";



// ManagedPropertyBundle
/** 
 * A bundle of managed properties.
**/
export class ManagedPropertyBundle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=managedProperty", elemType: ManagedProperty })
  managedProperty?: ManagedProperty[];
}
