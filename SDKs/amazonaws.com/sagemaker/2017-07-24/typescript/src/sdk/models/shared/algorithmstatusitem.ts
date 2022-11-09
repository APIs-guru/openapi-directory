import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DetailedAlgorithmStatusEnum } from "./detailedalgorithmstatusenum";


// AlgorithmStatusItem
/** 
 * Represents the overall status of an algorithm.
**/
export class AlgorithmStatusItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Status" })
  status: DetailedAlgorithmStatusEnum;
}
