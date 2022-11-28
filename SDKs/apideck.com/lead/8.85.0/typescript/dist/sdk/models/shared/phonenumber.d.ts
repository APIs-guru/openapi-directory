import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PhoneNumberTypeEnum {
    Primary = "primary",
    Secondary = "secondary",
    Home = "home",
    Work = "work",
    Office = "office",
    Mobile = "mobile",
    Assistant = "assistant",
    Fax = "fax",
    DirectDialIn = "direct-dial-in",
    Personal = "personal",
    Other = "other"
}
export declare class PhoneNumber extends SpeakeasyBase {
    areaCode?: string;
    countryCode?: string;
    extension?: string;
    id?: string;
    number: string;
    type?: PhoneNumberTypeEnum;
}
