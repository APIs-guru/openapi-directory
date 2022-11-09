import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StatusValuesEnum } from "./statusvaluesenum";


// AccountAssignmentOperationStatusMetadata
/** 
 * Provides information about the <a>AccountAssignment</a> creation request.
**/
export class AccountAssignmentOperationStatusMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedDate" })
  createdDate?: Date;

  @Metadata({ data: "json, name=RequestId" })
  requestId?: string;

  @Metadata({ data: "json, name=Status" })
  status?: StatusValuesEnum;
}
