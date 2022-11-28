import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IpAddressEntity
/** 
 * List IP Addresses associated with the current site
**/
export class IpAddressEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=associated_with" })
  associatedWith?: string;

  @SpeakeasyMetadata({ data: "json, name=group_id" })
  groupId?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=ip_addresses" })
  ipAddresses?: string[];
}
