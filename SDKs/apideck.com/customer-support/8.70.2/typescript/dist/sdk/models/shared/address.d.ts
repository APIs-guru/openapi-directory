import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum AddressTypeEnum {
    Primary = "primary",
    Secondary = "secondary",
    Home = "home",
    Office = "office",
    Shipping = "shipping",
    Billing = "billing",
    Other = "other"
}
export declare class Address extends SpeakeasyBase {
    city?: string;
    contactName?: string;
    country?: string;
    county?: string;
    email?: string;
    fax?: string;
    id?: string;
    latitude?: string;
    line1?: string;
    line2?: string;
    line3?: string;
    line4?: string;
    longitude?: string;
    name?: string;
    phoneNumber?: string;
    postalCode?: string;
    rowVersion?: string;
    salutation?: string;
    state?: string;
    streetNumber?: string;
    string?: string;
    type?: AddressTypeEnum;
    website?: string;
}
