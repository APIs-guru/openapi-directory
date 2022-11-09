import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IpAddressEntity
/** 
 * List IP Addresses associated with the current site
**/
export class IpAddressEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=associated_with" })
  associatedWith?: string;

  @Metadata({ data: "json, name=group_id" })
  groupId?: number;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=ip_addresses" })
  ipAddresses?: string[];
}
