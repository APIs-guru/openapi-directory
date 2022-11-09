import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceLocation } from "./resourcelocation";
import { OperationTypeEnum } from "./operationtypeenum";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { OperationStatusEnum } from "./operationstatusenum";


// Operation
/** 
 * Describes the API operation.
**/
export class Operation extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=errorCode" })
  errorCode?: string;

  @Metadata({ data: "json, name=errorDetails" })
  errorDetails?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=isTerminal" })
  isTerminal?: boolean;

  @Metadata({ data: "json, name=location" })
  location?: ResourceLocation;

  @Metadata({ data: "json, name=operationDetails" })
  operationDetails?: string;

  @Metadata({ data: "json, name=operationType" })
  operationType?: OperationTypeEnum;

  @Metadata({ data: "json, name=resourceName" })
  resourceName?: string;

  @Metadata({ data: "json, name=resourceType" })
  resourceType?: ResourceTypeEnum;

  @Metadata({ data: "json, name=status" })
  status?: OperationStatusEnum;

  @Metadata({ data: "json, name=statusChangedAt" })
  statusChangedAt?: Date;
}
