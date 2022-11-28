import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchStrategyEnum } from "./batchstrategyenum";
import { DataProcessing } from "./dataprocessing";
import { ExperimentConfig } from "./experimentconfig";
import { ModelClientConfig } from "./modelclientconfig";
import { Tag } from "./tag";
import { TransformInput } from "./transforminput";
import { TransformOutput } from "./transformoutput";
import { TransformResources } from "./transformresources";



export class CreateTransformJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BatchStrategy" })
  batchStrategy?: BatchStrategyEnum;

  @SpeakeasyMetadata({ data: "json, name=DataProcessing" })
  dataProcessing?: DataProcessing;

  @SpeakeasyMetadata({ data: "json, name=Environment" })
  environment?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=ExperimentConfig" })
  experimentConfig?: ExperimentConfig;

  @SpeakeasyMetadata({ data: "json, name=MaxConcurrentTransforms" })
  maxConcurrentTransforms?: number;

  @SpeakeasyMetadata({ data: "json, name=MaxPayloadInMB" })
  maxPayloadInMb?: number;

  @SpeakeasyMetadata({ data: "json, name=ModelClientConfig" })
  modelClientConfig?: ModelClientConfig;

  @SpeakeasyMetadata({ data: "json, name=ModelName" })
  modelName: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=TransformInput" })
  transformInput: TransformInput;

  @SpeakeasyMetadata({ data: "json, name=TransformJobName" })
  transformJobName: string;

  @SpeakeasyMetadata({ data: "json, name=TransformOutput" })
  transformOutput: TransformOutput;

  @SpeakeasyMetadata({ data: "json, name=TransformResources" })
  transformResources: TransformResources;
}
