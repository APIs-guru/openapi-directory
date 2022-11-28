import { SpeakeasyBase } from "../../../internal/utils";
import { ModelPackageContainerDefinition } from "./modelpackagecontainerdefinition";
import { ProductionVariantInstanceTypeEnum } from "./productionvariantinstancetypeenum";
import { TransformInstanceTypeEnum } from "./transforminstancetypeenum";
/**
 * Defines how to perform inference generation after a training job is run.
**/
export declare class InferenceSpecification extends SpeakeasyBase {
    containers: ModelPackageContainerDefinition[];
    supportedContentTypes: string[];
    supportedRealtimeInferenceInstanceTypes?: ProductionVariantInstanceTypeEnum[];
    supportedResponseMimeTypes: string[];
    supportedTransformInstanceTypes?: TransformInstanceTypeEnum[];
}
