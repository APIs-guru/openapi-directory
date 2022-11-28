import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AlgorithmStatusEnum } from "./algorithmstatusenum";



// AlgorithmSummary
/** 
 * Provides summary information about an algorithm.
**/
export class AlgorithmSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AlgorithmArn" })
  algorithmArn: string;

  @SpeakeasyMetadata({ data: "json, name=AlgorithmDescription" })
  algorithmDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=AlgorithmName" })
  algorithmName: string;

  @SpeakeasyMetadata({ data: "json, name=AlgorithmStatus" })
  algorithmStatus: AlgorithmStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime: Date;
}
