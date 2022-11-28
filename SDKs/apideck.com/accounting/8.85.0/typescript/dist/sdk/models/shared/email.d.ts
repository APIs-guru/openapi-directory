import { SpeakeasyBase } from "../../../internal/utils";
export declare enum EmailTypeEnum {
    Primary = "primary",
    Secondary = "secondary",
    Work = "work",
    Personal = "personal",
    Billing = "billing",
    Other = "other"
}
export declare class Email extends SpeakeasyBase {
    email: string;
    id?: string;
    type?: EmailTypeEnum;
}
