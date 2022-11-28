import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceAssociationOutputUrl } from "./instanceassociationoutputurl";



// InstanceAssociationStatusInfo
/** 
 * Status information about the instance association.
**/
export class InstanceAssociationStatusInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AssociationId" })
  associationId?: string;

  @SpeakeasyMetadata({ data: "json, name=AssociationName" })
  associationName?: string;

  @SpeakeasyMetadata({ data: "json, name=AssociationVersion" })
  associationVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=DetailedStatus" })
  detailedStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=DocumentVersion" })
  documentVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=ErrorCode" })
  errorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=ExecutionDate" })
  executionDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=ExecutionSummary" })
  executionSummary?: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceId" })
  instanceId?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=OutputUrl" })
  outputUrl?: InstanceAssociationOutputUrl;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;
}
