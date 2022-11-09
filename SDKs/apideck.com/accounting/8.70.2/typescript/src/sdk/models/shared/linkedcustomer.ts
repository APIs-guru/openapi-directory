import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LinkedCustomer
/** 
 * The customer this entity is linked to.
**/
export class LinkedCustomer extends SpeakeasyBase {
  @Metadata({ data: "json, name=company_name" })
  companyName?: string;

  @Metadata({ data: "json, name=display_id" })
  displayId?: string;

  @Metadata({ data: "json, name=display_name" })
  displayName?: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
