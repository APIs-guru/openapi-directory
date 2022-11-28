import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageClassificationModelMetadata } from "./imageclassificationmodelmetadata";
import { ImageObjectDetectionModelMetadata } from "./imageobjectdetectionmodelmetadata";
import { TablesModelMetadata } from "./tablesmodelmetadata";
import { TextClassificationModelMetadata } from "./textclassificationmodelmetadata";
import { TextExtractionModelMetadata } from "./textextractionmodelmetadata";
import { TranslationModelMetadata } from "./translationmodelmetadata";


export enum ModelDeploymentStateEnum {
    DeploymentStateUnspecified = "DEPLOYMENT_STATE_UNSPECIFIED",
    Deployed = "DEPLOYED",
    Undeployed = "UNDEPLOYED"
}


// Model
/** 
 * API proto representing a trained machine learning model.
**/
export class Model extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=datasetId" })
  datasetId?: string;

  @SpeakeasyMetadata({ data: "json, name=deploymentState" })
  deploymentState?: ModelDeploymentStateEnum;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=imageClassificationModelMetadata" })
  imageClassificationModelMetadata?: ImageClassificationModelMetadata;

  @SpeakeasyMetadata({ data: "json, name=imageObjectDetectionModelMetadata" })
  imageObjectDetectionModelMetadata?: ImageObjectDetectionModelMetadata;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=tablesModelMetadata" })
  tablesModelMetadata?: TablesModelMetadata;

  @SpeakeasyMetadata({ data: "json, name=textClassificationModelMetadata" })
  textClassificationModelMetadata?: TextClassificationModelMetadata;

  @SpeakeasyMetadata({ data: "json, name=textExtractionModelMetadata" })
  textExtractionModelMetadata?: TextExtractionModelMetadata;

  @SpeakeasyMetadata({ data: "json, name=textSentimentModelMetadata" })
  textSentimentModelMetadata?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=translationModelMetadata" })
  translationModelMetadata?: TranslationModelMetadata;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=videoClassificationModelMetadata" })
  videoClassificationModelMetadata?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=videoObjectTrackingModelMetadata" })
  videoObjectTrackingModelMetadata?: Map<string, any>;
}
