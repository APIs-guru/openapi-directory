import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListDevicesRequest extends SpeakeasyBase {
    deviceFleetName?: string;
    latestHeartbeatAfter?: Date;
    maxResults?: number;
    modelName?: string;
    nextToken?: string;
}
