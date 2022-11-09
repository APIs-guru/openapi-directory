import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OperationStatusEnum } from "./operationstatusenum";
import { OperationTypeEnum } from "./operationtypeenum";


// Operation
/** 
 * A complex type that contains information about a specified operation.
**/
export class Operation extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreateDate" })
  createDate?: Date;

  @Metadata({ data: "json, name=ErrorCode" })
  errorCode?: string;

  @Metadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=Status" })
  status?: OperationStatusEnum;

  @Metadata({ data: "json, name=Targets" })
  targets?: Map<string, string>;

  @Metadata({ data: "json, name=Type" })
  type?: OperationTypeEnum;

  @Metadata({ data: "json, name=UpdateDate" })
  updateDate?: Date;
}
