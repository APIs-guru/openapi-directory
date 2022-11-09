import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AsyncInferenceConfig } from "./asyncinferenceconfig";
import { DataCaptureConfig } from "./datacaptureconfig";
import { ProductionVariant } from "./productionvariant";
import { Tag } from "./tag";


export class CreateEndpointConfigInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AsyncInferenceConfig" })
  asyncInferenceConfig?: AsyncInferenceConfig;

  @Metadata({ data: "json, name=DataCaptureConfig" })
  dataCaptureConfig?: DataCaptureConfig;

  @Metadata({ data: "json, name=EndpointConfigName" })
  endpointConfigName: string;

  @Metadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=ProductionVariants", elemType: shared.ProductionVariant })
  productionVariants: ProductionVariant[];

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
