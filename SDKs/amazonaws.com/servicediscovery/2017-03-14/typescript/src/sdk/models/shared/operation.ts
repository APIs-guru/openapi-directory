import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OperationStatusEnum } from "./operationstatusenum";
import { OperationTypeEnum } from "./operationtypeenum";



// Operation
/** 
 * A complex type that contains information about a specified operation.
**/
export class Operation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreateDate" })
  createDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=ErrorCode" })
  errorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: OperationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Targets" })
  targets?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: OperationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=UpdateDate" })
  updateDate?: Date;
}
