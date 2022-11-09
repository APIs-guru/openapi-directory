import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AlgorithmStatusEnum } from "./algorithmstatusenum";
import { AlgorithmStatusDetails } from "./algorithmstatusdetails";
import { InferenceSpecification } from "./inferencespecification";
import { TrainingSpecification } from "./trainingspecification";
import { AlgorithmValidationSpecification } from "./algorithmvalidationspecification";


export class DescribeAlgorithmOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AlgorithmArn" })
  algorithmArn: string;

  @Metadata({ data: "json, name=AlgorithmDescription" })
  algorithmDescription?: string;

  @Metadata({ data: "json, name=AlgorithmName" })
  algorithmName: string;

  @Metadata({ data: "json, name=AlgorithmStatus" })
  algorithmStatus: AlgorithmStatusEnum;

  @Metadata({ data: "json, name=AlgorithmStatusDetails" })
  algorithmStatusDetails: AlgorithmStatusDetails;

  @Metadata({ data: "json, name=CertifyForMarketplace" })
  certifyForMarketplace?: boolean;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @Metadata({ data: "json, name=InferenceSpecification" })
  inferenceSpecification?: InferenceSpecification;

  @Metadata({ data: "json, name=ProductId" })
  productId?: string;

  @Metadata({ data: "json, name=TrainingSpecification" })
  trainingSpecification: TrainingSpecification;

  @Metadata({ data: "json, name=ValidationSpecification" })
  validationSpecification?: AlgorithmValidationSpecification;
}
