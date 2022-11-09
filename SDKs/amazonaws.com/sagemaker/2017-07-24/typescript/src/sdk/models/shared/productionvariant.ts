import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProductionVariantAcceleratorTypeEnum } from "./productionvariantacceleratortypeenum";
import { ProductionVariantCoreDumpConfig } from "./productionvariantcoredumpconfig";
import { ProductionVariantInstanceTypeEnum } from "./productionvariantinstancetypeenum";


// ProductionVariant
/** 
 * Identifies a model that you want to host and the resources chosen to deploy for hosting it. If you are deploying multiple models, tell Amazon SageMaker how to distribute traffic among the models by specifying variant weights. 
**/
export class ProductionVariant extends SpeakeasyBase {
  @Metadata({ data: "json, name=AcceleratorType" })
  acceleratorType?: ProductionVariantAcceleratorTypeEnum;

  @Metadata({ data: "json, name=CoreDumpConfig" })
  coreDumpConfig?: ProductionVariantCoreDumpConfig;

  @Metadata({ data: "json, name=InitialInstanceCount" })
  initialInstanceCount: number;

  @Metadata({ data: "json, name=InitialVariantWeight" })
  initialVariantWeight?: number;

  @Metadata({ data: "json, name=InstanceType" })
  instanceType: ProductionVariantInstanceTypeEnum;

  @Metadata({ data: "json, name=ModelName" })
  modelName: string;

  @Metadata({ data: "json, name=VariantName" })
  variantName: string;
}
