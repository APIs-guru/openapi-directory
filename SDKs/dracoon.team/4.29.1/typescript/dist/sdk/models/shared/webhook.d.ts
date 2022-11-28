import { SpeakeasyBase } from "../../../internal/utils";
import { UserInfo } from "./userinfo";
/**
 * Webhook information
**/
export declare class Webhook extends SpeakeasyBase {
    createdAt: Date;
    createdBy?: UserInfo;
    eventTypeNames: string[];
    expireAt: Date;
    failStatus?: number;
    id: number;
    isEnabled: boolean;
    name: string;
    secret?: string;
    updatedAt: Date;
    updatedBy?: UserInfo;
    url: string;
}
