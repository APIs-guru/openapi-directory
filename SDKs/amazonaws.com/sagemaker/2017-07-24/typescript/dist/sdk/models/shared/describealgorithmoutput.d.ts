import { SpeakeasyBase } from "../../../internal/utils";
import { AlgorithmStatusEnum } from "./algorithmstatusenum";
import { AlgorithmStatusDetails } from "./algorithmstatusdetails";
import { InferenceSpecification } from "./inferencespecification";
import { TrainingSpecification } from "./trainingspecification";
import { AlgorithmValidationSpecification } from "./algorithmvalidationspecification";
export declare class DescribeAlgorithmOutput extends SpeakeasyBase {
    algorithmArn: string;
    algorithmDescription?: string;
    algorithmName: string;
    algorithmStatus: AlgorithmStatusEnum;
    algorithmStatusDetails: AlgorithmStatusDetails;
    certifyForMarketplace?: boolean;
    creationTime: Date;
    inferenceSpecification?: InferenceSpecification;
    productId?: string;
    trainingSpecification: TrainingSpecification;
    validationSpecification?: AlgorithmValidationSpecification;
}
