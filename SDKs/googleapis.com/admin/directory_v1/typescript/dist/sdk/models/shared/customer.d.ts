import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerPostalAddress } from "./customerpostaladdress";
export declare class Customer extends SpeakeasyBase {
    alternateEmail?: string;
    customerCreationTime?: Date;
    customerDomain?: string;
    etag?: string;
    id?: string;
    kind?: string;
    language?: string;
    phoneNumber?: string;
    postalAddress?: CustomerPostalAddress;
}
