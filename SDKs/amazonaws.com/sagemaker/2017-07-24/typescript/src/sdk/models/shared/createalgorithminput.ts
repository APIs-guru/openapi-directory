import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InferenceSpecification } from "./inferencespecification";
import { Tag } from "./tag";
import { TrainingSpecification } from "./trainingspecification";
import { AlgorithmValidationSpecification } from "./algorithmvalidationspecification";



export class CreateAlgorithmInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AlgorithmDescription" })
  algorithmDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=AlgorithmName" })
  algorithmName: string;

  @SpeakeasyMetadata({ data: "json, name=CertifyForMarketplace" })
  certifyForMarketplace?: boolean;

  @SpeakeasyMetadata({ data: "json, name=InferenceSpecification" })
  inferenceSpecification?: InferenceSpecification;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=TrainingSpecification" })
  trainingSpecification: TrainingSpecification;

  @SpeakeasyMetadata({ data: "json, name=ValidationSpecification" })
  validationSpecification?: AlgorithmValidationSpecification;
}
