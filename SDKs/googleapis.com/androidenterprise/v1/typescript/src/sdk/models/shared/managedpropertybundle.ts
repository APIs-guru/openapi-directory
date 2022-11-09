import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ManagedProperty } from "./managedproperty";


// ManagedPropertyBundle
/** 
 * A bundle of managed properties.
**/
export class ManagedPropertyBundle extends SpeakeasyBase {
  @Metadata({ data: "json, name=managedProperty", elemType: shared.ManagedProperty })
  managedProperty?: ManagedProperty[];
}
