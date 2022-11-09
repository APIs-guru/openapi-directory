import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ManagedPropertyBundle } from "./managedpropertybundle";
import { ManagedPropertyBundle } from "./managedpropertybundle";


// ManagedProperty
/** 
 * A managed property of a managed configuration. The property must match one of the properties in the app restrictions schema of the product. Exactly one of the value fields must be populated, and it must match the property's type in the app restrictions schema.
**/
export class ManagedProperty extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=valueBool" })
  valueBool?: boolean;

  @Metadata({ data: "json, name=valueBundle" })
  valueBundle?: ManagedPropertyBundle;

  @Metadata({ data: "json, name=valueBundleArray", elemType: shared.ManagedPropertyBundle })
  valueBundleArray?: ManagedPropertyBundle[];

  @Metadata({ data: "json, name=valueInteger" })
  valueInteger?: number;

  @Metadata({ data: "json, name=valueString" })
  valueString?: string;

  @Metadata({ data: "json, name=valueStringArray" })
  valueStringArray?: string[];
}
