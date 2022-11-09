import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BatchStrategyEnum } from "./batchstrategyenum";
import { DataProcessing } from "./dataprocessing";
import { ExperimentConfig } from "./experimentconfig";
import { ModelClientConfig } from "./modelclientconfig";
import { Tag } from "./tag";
import { TransformInput } from "./transforminput";
import { TransformOutput } from "./transformoutput";
import { TransformResources } from "./transformresources";


export class CreateTransformJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=BatchStrategy" })
  batchStrategy?: BatchStrategyEnum;

  @Metadata({ data: "json, name=DataProcessing" })
  dataProcessing?: DataProcessing;

  @Metadata({ data: "json, name=Environment" })
  environment?: Map<string, string>;

  @Metadata({ data: "json, name=ExperimentConfig" })
  experimentConfig?: ExperimentConfig;

  @Metadata({ data: "json, name=MaxConcurrentTransforms" })
  maxConcurrentTransforms?: number;

  @Metadata({ data: "json, name=MaxPayloadInMB" })
  maxPayloadInMb?: number;

  @Metadata({ data: "json, name=ModelClientConfig" })
  modelClientConfig?: ModelClientConfig;

  @Metadata({ data: "json, name=ModelName" })
  modelName: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=TransformInput" })
  transformInput: TransformInput;

  @Metadata({ data: "json, name=TransformJobName" })
  transformJobName: string;

  @Metadata({ data: "json, name=TransformOutput" })
  transformOutput: TransformOutput;

  @Metadata({ data: "json, name=TransformResources" })
  transformResources: TransformResources;
}
