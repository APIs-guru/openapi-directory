import { SpeakeasyBase } from "../../../internal/utils";
import { ImageClassificationModelMetadata } from "./imageclassificationmodelmetadata";
import { ImageObjectDetectionModelMetadata } from "./imageobjectdetectionmodelmetadata";
import { TablesModelMetadata } from "./tablesmodelmetadata";
import { TextClassificationModelMetadata } from "./textclassificationmodelmetadata";
import { TextExtractionModelMetadata } from "./textextractionmodelmetadata";
import { TranslationModelMetadata } from "./translationmodelmetadata";
export declare enum ModelDeploymentStateEnum {
    DeploymentStateUnspecified = "DEPLOYMENT_STATE_UNSPECIFIED",
    Deployed = "DEPLOYED",
    Undeployed = "UNDEPLOYED"
}
/**
 * API proto representing a trained machine learning model.
**/
export declare class Model extends SpeakeasyBase {
    createTime?: string;
    datasetId?: string;
    deploymentState?: ModelDeploymentStateEnum;
    displayName?: string;
    imageClassificationModelMetadata?: ImageClassificationModelMetadata;
    imageObjectDetectionModelMetadata?: ImageObjectDetectionModelMetadata;
    name?: string;
    tablesModelMetadata?: TablesModelMetadata;
    textClassificationModelMetadata?: TextClassificationModelMetadata;
    textExtractionModelMetadata?: TextExtractionModelMetadata;
    textSentimentModelMetadata?: Map<string, any>;
    translationModelMetadata?: TranslationModelMetadata;
    updateTime?: string;
    videoClassificationModelMetadata?: Map<string, any>;
    videoObjectTrackingModelMetadata?: Map<string, any>;
}
