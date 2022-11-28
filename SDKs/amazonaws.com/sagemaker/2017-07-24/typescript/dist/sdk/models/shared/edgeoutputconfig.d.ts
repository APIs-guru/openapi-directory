import { SpeakeasyBase } from "../../../internal/utils";
import { EdgePresetDeploymentTypeEnum } from "./edgepresetdeploymenttypeenum";
/**
 * The output configuration.
**/
export declare class EdgeOutputConfig extends SpeakeasyBase {
    kmsKeyId?: string;
    presetDeploymentConfig?: string;
    presetDeploymentType?: EdgePresetDeploymentTypeEnum;
    s3OutputLocation: string;
}
