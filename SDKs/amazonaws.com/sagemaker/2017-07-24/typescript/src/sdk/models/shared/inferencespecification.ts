import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ModelPackageContainerDefinition } from "./modelpackagecontainerdefinition";
import { ProductionVariantInstanceTypeEnum } from "./productionvariantinstancetypeenum";
import { TransformInstanceTypeEnum } from "./transforminstancetypeenum";



// InferenceSpecification
/** 
 * Defines how to perform inference generation after a training job is run.
**/
export class InferenceSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Containers", elemType: ModelPackageContainerDefinition })
  containers: ModelPackageContainerDefinition[];

  @SpeakeasyMetadata({ data: "json, name=SupportedContentTypes" })
  supportedContentTypes: string[];

  @SpeakeasyMetadata({ data: "json, name=SupportedRealtimeInferenceInstanceTypes" })
  supportedRealtimeInferenceInstanceTypes?: ProductionVariantInstanceTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=SupportedResponseMIMETypes" })
  supportedResponseMimeTypes: string[];

  @SpeakeasyMetadata({ data: "json, name=SupportedTransformInstanceTypes" })
  supportedTransformInstanceTypes?: TransformInstanceTypeEnum[];
}
