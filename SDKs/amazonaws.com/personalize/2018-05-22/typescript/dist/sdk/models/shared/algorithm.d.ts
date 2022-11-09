import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AlgorithmImage } from "./algorithmimage";
import { DefaultHyperParameterRanges } from "./defaulthyperparameterranges";
/**
 * Describes a custom algorithm.
**/
export declare class Algorithm extends SpeakeasyBase {
    algorithmArn?: string;
    algorithmImage?: AlgorithmImage;
    creationDateTime?: Date;
    defaultHyperParameterRanges?: DefaultHyperParameterRanges;
    defaultHyperParameters?: Map<string, string>;
    defaultResourceConfig?: Map<string, string>;
    lastUpdatedDateTime?: Date;
    name?: string;
    roleArn?: string;
    trainingInputMode?: string;
}
