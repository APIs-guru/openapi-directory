import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * A configuration collects the provisioning options for Android devices. Each configuration combines the following: * The EMM device policy controller (DPC) installed on the devices. * EMM policies enforced on the devices. * Metadata displayed on the device to help users during setup. Customers can add as many configurations as they need. However, zero-touch enrollment works best when a customer sets a default configuration that's applied to any new devices the organization purchases.
**/
export declare class Configuration extends SpeakeasyBase {
    companyName?: string;
    configurationId?: string;
    configurationName?: string;
    contactEmail?: string;
    contactPhone?: string;
    customMessage?: string;
    dpcExtras?: string;
    dpcResourcePath?: string;
    isDefault?: boolean;
    name?: string;
}
