import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Configuration
/** 
 * A configuration collects the provisioning options for Android devices. Each configuration combines the following: * The EMM device policy controller (DPC) installed on the devices. * EMM policies enforced on the devices. * Metadata displayed on the device to help users during setup. Customers can add as many configurations as they need. However, zero-touch enrollment works best when a customer sets a default configuration that's applied to any new devices the organization purchases.
**/
export class Configuration extends SpeakeasyBase {
  @Metadata({ data: "json, name=companyName" })
  companyName?: string;

  @Metadata({ data: "json, name=configurationId" })
  configurationId?: string;

  @Metadata({ data: "json, name=configurationName" })
  configurationName?: string;

  @Metadata({ data: "json, name=contactEmail" })
  contactEmail?: string;

  @Metadata({ data: "json, name=contactPhone" })
  contactPhone?: string;

  @Metadata({ data: "json, name=customMessage" })
  customMessage?: string;

  @Metadata({ data: "json, name=dpcExtras" })
  dpcExtras?: string;

  @Metadata({ data: "json, name=dpcResourcePath" })
  dpcResourcePath?: string;

  @Metadata({ data: "json, name=isDefault" })
  isDefault?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
