import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LinkedCustomerInput
/** 
 * The customer this entity is linked to.
**/
export class LinkedCustomerInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=display_name" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


// LinkedCustomer
/** 
 * The customer this entity is linked to.
**/
export class LinkedCustomer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=company_name" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "json, name=display_id" })
  displayId?: string;

  @SpeakeasyMetadata({ data: "json, name=display_name" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
