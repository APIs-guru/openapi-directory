import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InferenceSpecification } from "./inferencespecification";
import { Tag } from "./tag";
import { TrainingSpecification } from "./trainingspecification";
import { AlgorithmValidationSpecification } from "./algorithmvalidationspecification";


export class CreateAlgorithmInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AlgorithmDescription" })
  algorithmDescription?: string;

  @Metadata({ data: "json, name=AlgorithmName" })
  algorithmName: string;

  @Metadata({ data: "json, name=CertifyForMarketplace" })
  certifyForMarketplace?: boolean;

  @Metadata({ data: "json, name=InferenceSpecification" })
  inferenceSpecification?: InferenceSpecification;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=TrainingSpecification" })
  trainingSpecification: TrainingSpecification;

  @Metadata({ data: "json, name=ValidationSpecification" })
  validationSpecification?: AlgorithmValidationSpecification;
}
