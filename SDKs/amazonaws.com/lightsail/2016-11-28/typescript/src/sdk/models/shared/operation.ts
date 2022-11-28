import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceLocation } from "./resourcelocation";
import { OperationTypeEnum } from "./operationtypeenum";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { OperationStatusEnum } from "./operationstatusenum";



// Operation
/** 
 * Describes the API operation.
**/
export class Operation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=errorCode" })
  errorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=errorDetails" })
  errorDetails?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=isTerminal" })
  isTerminal?: boolean;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: ResourceLocation;

  @SpeakeasyMetadata({ data: "json, name=operationDetails" })
  operationDetails?: string;

  @SpeakeasyMetadata({ data: "json, name=operationType" })
  operationType?: OperationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=resourceName" })
  resourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType?: ResourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: OperationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=statusChangedAt" })
  statusChangedAt?: Date;
}
