import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ModelPackageContainerDefinition } from "./modelpackagecontainerdefinition";
import { ProductionVariantInstanceTypeEnum } from "./productionvariantinstancetypeenum";
import { TransformInstanceTypeEnum } from "./transforminstancetypeenum";


// InferenceSpecification
/** 
 * Defines how to perform inference generation after a training job is run.
**/
export class InferenceSpecification extends SpeakeasyBase {
  @Metadata({ data: "json, name=Containers", elemType: shared.ModelPackageContainerDefinition })
  containers: ModelPackageContainerDefinition[];

  @Metadata({ data: "json, name=SupportedContentTypes" })
  supportedContentTypes: string[];

  @Metadata({ data: "json, name=SupportedRealtimeInferenceInstanceTypes" })
  supportedRealtimeInferenceInstanceTypes?: ProductionVariantInstanceTypeEnum[];

  @Metadata({ data: "json, name=SupportedResponseMIMETypes" })
  supportedResponseMimeTypes: string[];

  @Metadata({ data: "json, name=SupportedTransformInstanceTypes" })
  supportedTransformInstanceTypes?: TransformInstanceTypeEnum[];
}
