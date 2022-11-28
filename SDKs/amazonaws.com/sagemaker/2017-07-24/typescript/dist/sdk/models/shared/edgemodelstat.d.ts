import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Status of edge devices with this model.
**/
export declare class EdgeModelStat extends SpeakeasyBase {
    activeDeviceCount: number;
    connectedDeviceCount: number;
    modelName: string;
    modelVersion: string;
    offlineDeviceCount: number;
    samplingDeviceCount: number;
}
