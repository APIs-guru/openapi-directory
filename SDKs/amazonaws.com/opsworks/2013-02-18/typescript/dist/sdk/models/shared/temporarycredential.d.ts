import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the data needed by RDP clients such as the Microsoft Remote Desktop Connection to log in to the instance.
**/
export declare class TemporaryCredential extends SpeakeasyBase {
    instanceId?: string;
    password?: string;
    username?: string;
    validForInMinutes?: number;
}
