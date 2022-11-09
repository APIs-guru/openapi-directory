import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// As2KeyEntity
/** 
 * List As2 Keys
**/
export class As2KeyEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=as2_partnership_name" })
  as2PartnershipName?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;
}
