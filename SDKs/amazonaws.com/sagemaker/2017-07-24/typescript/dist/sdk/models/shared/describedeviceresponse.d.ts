import { SpeakeasyBase } from "../../../internal/utils";
import { EdgeModel } from "./edgemodel";
export declare class DescribeDeviceResponse extends SpeakeasyBase {
    description?: string;
    deviceArn?: string;
    deviceFleetName: string;
    deviceName: string;
    iotThingName?: string;
    latestHeartbeat?: Date;
    maxModels?: number;
    models?: EdgeModel[];
    nextToken?: string;
    registrationTime: Date;
}
