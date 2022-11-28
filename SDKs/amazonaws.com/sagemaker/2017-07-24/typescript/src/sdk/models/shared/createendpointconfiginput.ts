import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AsyncInferenceConfig } from "./asyncinferenceconfig";
import { DataCaptureConfig } from "./datacaptureconfig";
import { ProductionVariant } from "./productionvariant";
import { Tag } from "./tag";



export class CreateEndpointConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AsyncInferenceConfig" })
  asyncInferenceConfig?: AsyncInferenceConfig;

  @SpeakeasyMetadata({ data: "json, name=DataCaptureConfig" })
  dataCaptureConfig?: DataCaptureConfig;

  @SpeakeasyMetadata({ data: "json, name=EndpointConfigName" })
  endpointConfigName: string;

  @SpeakeasyMetadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=ProductionVariants", elemType: ProductionVariant })
  productionVariants: ProductionVariant[];

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
