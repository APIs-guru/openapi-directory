import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProductionVariantAcceleratorTypeEnum } from "./productionvariantacceleratortypeenum";
import { ProductionVariantCoreDumpConfig } from "./productionvariantcoredumpconfig";
import { ProductionVariantInstanceTypeEnum } from "./productionvariantinstancetypeenum";



// ProductionVariant
/** 
 * Identifies a model that you want to host and the resources chosen to deploy for hosting it. If you are deploying multiple models, tell Amazon SageMaker how to distribute traffic among the models by specifying variant weights. 
**/
export class ProductionVariant extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceleratorType" })
  acceleratorType?: ProductionVariantAcceleratorTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=CoreDumpConfig" })
  coreDumpConfig?: ProductionVariantCoreDumpConfig;

  @SpeakeasyMetadata({ data: "json, name=InitialInstanceCount" })
  initialInstanceCount: number;

  @SpeakeasyMetadata({ data: "json, name=InitialVariantWeight" })
  initialVariantWeight?: number;

  @SpeakeasyMetadata({ data: "json, name=InstanceType" })
  instanceType: ProductionVariantInstanceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ModelName" })
  modelName: string;

  @SpeakeasyMetadata({ data: "json, name=VariantName" })
  variantName: string;
}
