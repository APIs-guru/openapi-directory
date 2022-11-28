import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Configuration
/** 
 * A configuration collects the provisioning options for Android devices. Each configuration combines the following: * The EMM device policy controller (DPC) installed on the devices. * EMM policies enforced on the devices. * Metadata displayed on the device to help users during setup. Customers can add as many configurations as they need. However, zero-touch enrollment works best when a customer sets a default configuration that's applied to any new devices the organization purchases.
**/
export class Configuration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=companyName" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "json, name=configurationId" })
  configurationId?: string;

  @SpeakeasyMetadata({ data: "json, name=configurationName" })
  configurationName?: string;

  @SpeakeasyMetadata({ data: "json, name=contactEmail" })
  contactEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=contactPhone" })
  contactPhone?: string;

  @SpeakeasyMetadata({ data: "json, name=customMessage" })
  customMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=dpcExtras" })
  dpcExtras?: string;

  @SpeakeasyMetadata({ data: "json, name=dpcResourcePath" })
  dpcResourcePath?: string;

  @SpeakeasyMetadata({ data: "json, name=isDefault" })
  isDefault?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


// ConfigurationInput
/** 
 * A configuration collects the provisioning options for Android devices. Each configuration combines the following: * The EMM device policy controller (DPC) installed on the devices. * EMM policies enforced on the devices. * Metadata displayed on the device to help users during setup. Customers can add as many configurations as they need. However, zero-touch enrollment works best when a customer sets a default configuration that's applied to any new devices the organization purchases.
**/
export class ConfigurationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=companyName" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "json, name=configurationName" })
  configurationName?: string;

  @SpeakeasyMetadata({ data: "json, name=contactEmail" })
  contactEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=contactPhone" })
  contactPhone?: string;

  @SpeakeasyMetadata({ data: "json, name=customMessage" })
  customMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=dpcExtras" })
  dpcExtras?: string;

  @SpeakeasyMetadata({ data: "json, name=dpcResourcePath" })
  dpcResourcePath?: string;

  @SpeakeasyMetadata({ data: "json, name=isDefault" })
  isDefault?: boolean;
}
