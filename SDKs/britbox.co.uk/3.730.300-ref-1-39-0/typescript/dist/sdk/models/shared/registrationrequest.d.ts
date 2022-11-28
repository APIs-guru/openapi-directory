import { SpeakeasyBase } from "../../../internal/utils";
export declare class RegistrationRequest extends SpeakeasyBase {
    email: string;
    firstName?: string;
    languageCode?: string;
    lastName?: string;
    marketing?: boolean;
    password: string;
    pin?: string;
    segments?: string[];
}
