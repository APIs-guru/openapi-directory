import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OperationStatusEnum } from "./operationstatusenum";
import { OperationTypeEnum } from "./operationtypeenum";



// GetOperationDetailResponse
/** 
 * The GetOperationDetail response includes the following elements.
**/
export class GetOperationDetailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DomainName" })
  domainName?: string;

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=OperationId" })
  operationId?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: OperationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=SubmittedDate" })
  submittedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: OperationTypeEnum;
}
