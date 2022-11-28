import { SpeakeasyBase } from "../../../internal/utils";
import { StreamInfo } from "./streaminfo";
export declare class GlobalAlert extends SpeakeasyBase {
    alertHtml?: string;
    alertKey?: string;
    alertLevel?: number;
    alertLink?: string;
    alertTimestamp?: Date;
    alertType?: number;
    streamInfo?: StreamInfo;
}
