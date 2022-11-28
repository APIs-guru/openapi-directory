import { SpeakeasyBase } from "../../../internal/utils";
import { AsyncInferenceConfig } from "./asyncinferenceconfig";
import { DataCaptureConfig } from "./datacaptureconfig";
import { ProductionVariant } from "./productionvariant";
export declare class DescribeEndpointConfigOutput extends SpeakeasyBase {
    asyncInferenceConfig?: AsyncInferenceConfig;
    creationTime: Date;
    dataCaptureConfig?: DataCaptureConfig;
    endpointConfigArn: string;
    endpointConfigName: string;
    kmsKeyId?: string;
    productionVariants: ProductionVariant[];
}
