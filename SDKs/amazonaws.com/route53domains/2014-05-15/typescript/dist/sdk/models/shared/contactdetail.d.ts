import { SpeakeasyBase } from "../../../internal/utils";
import { ContactTypeEnum } from "./contacttypeenum";
import { CountryCodeEnum } from "./countrycodeenum";
import { ExtraParam } from "./extraparam";
/**
 * ContactDetail includes the following elements.
**/
export declare class ContactDetail extends SpeakeasyBase {
    addressLine1?: string;
    addressLine2?: string;
    city?: string;
    contactType?: ContactTypeEnum;
    countryCode?: CountryCodeEnum;
    email?: string;
    extraParams?: ExtraParam[];
    fax?: string;
    firstName?: string;
    lastName?: string;
    organizationName?: string;
    phoneNumber?: string;
    state?: string;
    zipCode?: string;
}
