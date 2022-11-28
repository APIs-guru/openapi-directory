import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides feature transformation information. Feature transformation is the process of modifying raw input data into a form more suitable for model training.
**/
export declare class FeatureTransformation extends SpeakeasyBase {
    creationDateTime?: Date;
    defaultParameters?: Map<string, string>;
    featureTransformationArn?: string;
    lastUpdatedDateTime?: Date;
    name?: string;
    status?: string;
}
