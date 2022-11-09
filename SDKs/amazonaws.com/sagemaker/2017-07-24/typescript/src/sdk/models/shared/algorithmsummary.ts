import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AlgorithmStatusEnum } from "./algorithmstatusenum";


// AlgorithmSummary
/** 
 * Provides summary information about an algorithm.
**/
export class AlgorithmSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=AlgorithmArn" })
  algorithmArn: string;

  @Metadata({ data: "json, name=AlgorithmDescription" })
  algorithmDescription?: string;

  @Metadata({ data: "json, name=AlgorithmName" })
  algorithmName: string;

  @Metadata({ data: "json, name=AlgorithmStatus" })
  algorithmStatus: AlgorithmStatusEnum;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime: Date;
}
