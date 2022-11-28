import { SpeakeasyBase } from "../../../internal/utils";
import { ExtraField } from "./extrafield";
export declare class RegistrantInput extends SpeakeasyBase {
    address?: string;
    city?: string;
    companyName?: string;
    countryCode?: string;
    email?: string;
    enterpriseNumber?: string;
    extraFields?: ExtraField[];
    fax?: string;
    firstName?: string;
    languageCode?: string;
    lastName?: string;
    phone?: string;
    postalCode?: string;
}
