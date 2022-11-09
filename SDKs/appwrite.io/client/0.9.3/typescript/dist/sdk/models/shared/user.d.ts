import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * User
**/
export declare class User extends SpeakeasyBase {
    dollarId: string;
    email: string;
    emailVerification: boolean;
    name: string;
    passwordUpdate: number;
    prefs: Map<string, any>;
    registration: number;
    status: number;
}
