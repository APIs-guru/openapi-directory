import { SpeakeasyBase } from "../../../internal/utils";
import { ProductionVariantAcceleratorTypeEnum } from "./productionvariantacceleratortypeenum";
import { ProductionVariantCoreDumpConfig } from "./productionvariantcoredumpconfig";
import { ProductionVariantInstanceTypeEnum } from "./productionvariantinstancetypeenum";
/**
 * Identifies a model that you want to host and the resources chosen to deploy for hosting it. If you are deploying multiple models, tell Amazon SageMaker how to distribute traffic among the models by specifying variant weights.
**/
export declare class ProductionVariant extends SpeakeasyBase {
    acceleratorType?: ProductionVariantAcceleratorTypeEnum;
    coreDumpConfig?: ProductionVariantCoreDumpConfig;
    initialInstanceCount: number;
    initialVariantWeight?: number;
    instanceType: ProductionVariantInstanceTypeEnum;
    modelName: string;
    variantName: string;
}
