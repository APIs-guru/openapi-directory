import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DetailedAlgorithmStatusEnum } from "./detailedalgorithmstatusenum";



// AlgorithmStatusItem
/** 
 * Represents the overall status of an algorithm.
**/
export class AlgorithmStatusItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status: DetailedAlgorithmStatusEnum;
}
