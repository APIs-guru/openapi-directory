import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies an algorithm that was used to create the model package. The algorithm must be either an algorithm resource in your Amazon SageMaker account or an algorithm in Amazon Web Services Marketplace that you are subscribed to.
**/
export declare class SourceAlgorithm extends SpeakeasyBase {
    algorithmName: string;
    modelDataUrl?: string;
}
