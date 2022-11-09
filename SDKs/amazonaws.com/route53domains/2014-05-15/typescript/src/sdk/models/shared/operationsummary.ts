import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OperationStatusEnum } from "./operationstatusenum";
import { OperationTypeEnum } from "./operationtypeenum";


// OperationSummary
/** 
 * OperationSummary includes the following elements.
**/
export class OperationSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=OperationId" })
  operationId: string;

  @Metadata({ data: "json, name=Status" })
  status: OperationStatusEnum;

  @Metadata({ data: "json, name=SubmittedDate" })
  submittedDate: Date;

  @Metadata({ data: "json, name=Type" })
  type: OperationTypeEnum;
}
