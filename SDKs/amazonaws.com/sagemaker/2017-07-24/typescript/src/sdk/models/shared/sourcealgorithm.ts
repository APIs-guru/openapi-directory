import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SourceAlgorithm
/** 
 * Specifies an algorithm that was used to create the model package. The algorithm must be either an algorithm resource in your Amazon SageMaker account or an algorithm in Amazon Web Services Marketplace that you are subscribed to.
**/
export class SourceAlgorithm extends SpeakeasyBase {
  @Metadata({ data: "json, name=AlgorithmName" })
  algorithmName: string;

  @Metadata({ data: "json, name=ModelDataUrl" })
  modelDataUrl?: string;
}
