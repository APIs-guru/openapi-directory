import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImageClassificationModelMetadata } from "./imageclassificationmodelmetadata";
import { ImageObjectDetectionModelMetadata } from "./imageobjectdetectionmodelmetadata";
import { TablesModelMetadata } from "./tablesmodelmetadata";
import { TextClassificationModelMetadata } from "./textclassificationmodelmetadata";
import { TextExtractionModelMetadata } from "./textextractionmodelmetadata";
import { TranslationModelMetadata } from "./translationmodelmetadata";

export enum ModelDeploymentStateEnum {
    DeploymentStateUnspecified = "DEPLOYMENT_STATE_UNSPECIFIED"
,    Deployed = "DEPLOYED"
,    Undeployed = "UNDEPLOYED"
}


// Model
/** 
 * API proto representing a trained machine learning model.
**/
export class Model extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=datasetId" })
  datasetId?: string;

  @Metadata({ data: "json, name=deploymentState" })
  deploymentState?: ModelDeploymentStateEnum;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=imageClassificationModelMetadata" })
  imageClassificationModelMetadata?: ImageClassificationModelMetadata;

  @Metadata({ data: "json, name=imageObjectDetectionModelMetadata" })
  imageObjectDetectionModelMetadata?: ImageObjectDetectionModelMetadata;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=tablesModelMetadata" })
  tablesModelMetadata?: TablesModelMetadata;

  @Metadata({ data: "json, name=textClassificationModelMetadata" })
  textClassificationModelMetadata?: TextClassificationModelMetadata;

  @Metadata({ data: "json, name=textExtractionModelMetadata" })
  textExtractionModelMetadata?: TextExtractionModelMetadata;

  @Metadata({ data: "json, name=textSentimentModelMetadata" })
  textSentimentModelMetadata?: Map<string, any>;

  @Metadata({ data: "json, name=translationModelMetadata" })
  translationModelMetadata?: TranslationModelMetadata;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=videoClassificationModelMetadata" })
  videoClassificationModelMetadata?: Map<string, any>;

  @Metadata({ data: "json, name=videoObjectTrackingModelMetadata" })
  videoObjectTrackingModelMetadata?: Map<string, any>;
}
