import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ManagedPropertyBundle } from "./managedpropertybundle";



// ManagedProperty
/** 
 * A managed property of a managed configuration. The property must match one of the properties in the app restrictions schema of the product. Exactly one of the value fields must be populated, and it must match the property's type in the app restrictions schema.
**/
export class ManagedProperty extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=valueBool" })
  valueBool?: boolean;

  @SpeakeasyMetadata({ data: "json, name=valueBundle" })
  valueBundle?: ManagedPropertyBundle;

  @SpeakeasyMetadata({ data: "json, name=valueBundleArray", elemType: ManagedPropertyBundle })
  valueBundleArray?: ManagedPropertyBundle[];

  @SpeakeasyMetadata({ data: "json, name=valueInteger" })
  valueInteger?: number;

  @SpeakeasyMetadata({ data: "json, name=valueString" })
  valueString?: string;

  @SpeakeasyMetadata({ data: "json, name=valueStringArray" })
  valueStringArray?: string[];
}
