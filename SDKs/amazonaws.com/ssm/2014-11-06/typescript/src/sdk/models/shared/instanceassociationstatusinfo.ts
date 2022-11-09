import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InstanceAssociationOutputUrl } from "./instanceassociationoutputurl";


// InstanceAssociationStatusInfo
/** 
 * Status information about the instance association.
**/
export class InstanceAssociationStatusInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=AssociationId" })
  associationId?: string;

  @Metadata({ data: "json, name=AssociationName" })
  associationName?: string;

  @Metadata({ data: "json, name=AssociationVersion" })
  associationVersion?: string;

  @Metadata({ data: "json, name=DetailedStatus" })
  detailedStatus?: string;

  @Metadata({ data: "json, name=DocumentVersion" })
  documentVersion?: string;

  @Metadata({ data: "json, name=ErrorCode" })
  errorCode?: string;

  @Metadata({ data: "json, name=ExecutionDate" })
  executionDate?: Date;

  @Metadata({ data: "json, name=ExecutionSummary" })
  executionSummary?: string;

  @Metadata({ data: "json, name=InstanceId" })
  instanceId?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=OutputUrl" })
  outputUrl?: InstanceAssociationOutputUrl;

  @Metadata({ data: "json, name=Status" })
  status?: string;
}
