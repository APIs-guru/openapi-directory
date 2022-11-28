import { SpeakeasyBase } from "../../../internal/utils";
import { StatusEnum } from "./statusenum";
/**
 * Provides information about a bot. .
**/
export declare class BotMetadata extends SpeakeasyBase {
    createdDate?: Date;
    description?: string;
    lastUpdatedDate?: Date;
    name?: string;
    status?: StatusEnum;
    version?: string;
}
