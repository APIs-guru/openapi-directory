import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SourceAlgorithm
/** 
 * Specifies an algorithm that was used to create the model package. The algorithm must be either an algorithm resource in your Amazon SageMaker account or an algorithm in Amazon Web Services Marketplace that you are subscribed to.
**/
export class SourceAlgorithm extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AlgorithmName" })
  algorithmName: string;

  @SpeakeasyMetadata({ data: "json, name=ModelDataUrl" })
  modelDataUrl?: string;
}
