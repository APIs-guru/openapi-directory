import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AlgorithmStatusEnum } from "./algorithmstatusenum";
import { AlgorithmStatusDetails } from "./algorithmstatusdetails";
import { InferenceSpecification } from "./inferencespecification";
import { TrainingSpecification } from "./trainingspecification";
import { AlgorithmValidationSpecification } from "./algorithmvalidationspecification";



export class DescribeAlgorithmOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AlgorithmArn" })
  algorithmArn: string;

  @SpeakeasyMetadata({ data: "json, name=AlgorithmDescription" })
  algorithmDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=AlgorithmName" })
  algorithmName: string;

  @SpeakeasyMetadata({ data: "json, name=AlgorithmStatus" })
  algorithmStatus: AlgorithmStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=AlgorithmStatusDetails" })
  algorithmStatusDetails: AlgorithmStatusDetails;

  @SpeakeasyMetadata({ data: "json, name=CertifyForMarketplace" })
  certifyForMarketplace?: boolean;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @SpeakeasyMetadata({ data: "json, name=InferenceSpecification" })
  inferenceSpecification?: InferenceSpecification;

  @SpeakeasyMetadata({ data: "json, name=ProductId" })
  productId?: string;

  @SpeakeasyMetadata({ data: "json, name=TrainingSpecification" })
  trainingSpecification: TrainingSpecification;

  @SpeakeasyMetadata({ data: "json, name=ValidationSpecification" })
  validationSpecification?: AlgorithmValidationSpecification;
}
