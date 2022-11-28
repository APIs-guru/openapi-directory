import { SpeakeasyBase } from "../../../internal/utils";
import { AsyncInferenceConfig } from "./asyncinferenceconfig";
import { DataCaptureConfig } from "./datacaptureconfig";
import { ProductionVariant } from "./productionvariant";
import { Tag } from "./tag";
export declare class CreateEndpointConfigInput extends SpeakeasyBase {
    asyncInferenceConfig?: AsyncInferenceConfig;
    dataCaptureConfig?: DataCaptureConfig;
    endpointConfigName: string;
    kmsKeyId?: string;
    productionVariants: ProductionVariant[];
    tags?: Tag[];
}
