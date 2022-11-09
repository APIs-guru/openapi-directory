import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * An event that is related to the server, such as the start of maintenance or backup.
**/
export declare class ServerEvent extends SpeakeasyBase {
    createdAt?: Date;
    logUrl?: string;
    message?: string;
    serverName?: string;
}
