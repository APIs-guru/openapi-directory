import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Metadata } from "./metadata";
import { ResourceTypeEnum } from "./resourcetypeenum";



// LicenseOperationFailure
/** 
 * Describes the failure of a license operation.
**/
export class LicenseOperationFailure extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=FailureTime" })
  failureTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=MetadataList", elemType: Metadata })
  metadataList?: Metadata[];

  @SpeakeasyMetadata({ data: "json, name=OperationName" })
  operationName?: string;

  @SpeakeasyMetadata({ data: "json, name=OperationRequestedBy" })
  operationRequestedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceArn" })
  resourceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceOwnerId" })
  resourceOwnerId?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceType" })
  resourceType?: ResourceTypeEnum;
}
