import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OperationStatusEnum } from "./operationstatusenum";
import { OperationTypeEnum } from "./operationtypeenum";



// OperationSummary
/** 
 * OperationSummary includes the following elements.
**/
export class OperationSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OperationId" })
  operationId: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status: OperationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=SubmittedDate" })
  submittedDate: Date;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: OperationTypeEnum;
}
