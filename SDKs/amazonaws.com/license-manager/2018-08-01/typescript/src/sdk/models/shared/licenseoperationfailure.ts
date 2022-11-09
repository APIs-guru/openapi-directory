import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Metadata } from "./metadata";
import { ResourceTypeEnum } from "./resourcetypeenum";


// LicenseOperationFailure
/** 
 * Describes the failure of a license operation.
**/
export class LicenseOperationFailure extends SpeakeasyBase {
  @Metadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=FailureTime" })
  failureTime?: Date;

  @Metadata({ data: "json, name=MetadataList", elemType: shared.Metadata })
  metadataList?: Metadata[];

  @Metadata({ data: "json, name=OperationName" })
  operationName?: string;

  @Metadata({ data: "json, name=OperationRequestedBy" })
  operationRequestedBy?: string;

  @Metadata({ data: "json, name=ResourceArn" })
  resourceArn?: string;

  @Metadata({ data: "json, name=ResourceOwnerId" })
  resourceOwnerId?: string;

  @Metadata({ data: "json, name=ResourceType" })
  resourceType?: ResourceTypeEnum;
}
