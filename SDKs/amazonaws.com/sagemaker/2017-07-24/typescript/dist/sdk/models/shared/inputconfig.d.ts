import { SpeakeasyBase } from "../../../internal/utils";
import { FrameworkEnum } from "./frameworkenum";
/**
 * Contains information about the location of input model artifacts, the name and shape of the expected data inputs, and the framework in which the model was trained.
**/
export declare class InputConfig extends SpeakeasyBase {
    dataInputConfig: string;
    framework: FrameworkEnum;
    frameworkVersion?: string;
    s3Uri: string;
}
