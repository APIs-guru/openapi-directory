import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OperationStatusEnum } from "./operationstatusenum";
import { OperationTypeEnum } from "./operationtypeenum";


// GetOperationDetailResponse
/** 
 * The GetOperationDetail response includes the following elements.
**/
export class GetOperationDetailResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DomainName" })
  domainName?: string;

  @Metadata({ data: "json, name=Message" })
  message?: string;

  @Metadata({ data: "json, name=OperationId" })
  operationId?: string;

  @Metadata({ data: "json, name=Status" })
  status?: OperationStatusEnum;

  @Metadata({ data: "json, name=SubmittedDate" })
  submittedDate?: Date;

  @Metadata({ data: "json, name=Type" })
  type?: OperationTypeEnum;
}
