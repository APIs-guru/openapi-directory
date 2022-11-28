import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StatusValuesEnum } from "./statusvaluesenum";



// AccountAssignmentOperationStatusMetadata
/** 
 * Provides information about the <a>AccountAssignment</a> creation request.
**/
export class AccountAssignmentOperationStatusMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=RequestId" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: StatusValuesEnum;
}
