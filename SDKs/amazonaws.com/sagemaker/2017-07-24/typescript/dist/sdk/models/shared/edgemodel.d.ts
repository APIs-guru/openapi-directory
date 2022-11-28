import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The model on the edge device.
**/
export declare class EdgeModel extends SpeakeasyBase {
    latestInference?: Date;
    latestSampleTime?: Date;
    modelName: string;
    modelVersion: string;
}
