import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";



// LinkedSupplier
/** 
 * The supplier this entity is linked to.
**/
export class LinkedSupplier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: Address;

  @SpeakeasyMetadata({ data: "json, name=company_name" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "json, name=display_name" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}


// LinkedSupplierInput
/** 
 * The supplier this entity is linked to.
**/
export class LinkedSupplierInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: Address;

  @SpeakeasyMetadata({ data: "json, name=display_name" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}
