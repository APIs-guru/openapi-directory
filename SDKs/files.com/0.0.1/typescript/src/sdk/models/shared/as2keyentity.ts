import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// As2KeyEntity
/** 
 * List As2 Keys
**/
export class As2KeyEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=as2_partnership_name" })
  as2PartnershipName?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;
}
