import { SpeakeasyBase } from "../../../internal/utils";
/**
 * User Authentication Data
**/
export declare class UserAuthData extends SpeakeasyBase {
    adConfigId?: number;
    login?: string;
    method: string;
    mustChangePassword?: boolean;
    oidConfigId?: number;
    password?: string;
}
