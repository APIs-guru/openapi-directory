import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AssociationOverview } from "./associationoverview";
import { Target } from "./target";


// Association
/** 
 * Describes an association of a Amazon Web Services Systems Manager document (SSM document) and an instance.
**/
export class Association extends SpeakeasyBase {
  @Metadata({ data: "json, name=AssociationId" })
  associationId?: string;

  @Metadata({ data: "json, name=AssociationName" })
  associationName?: string;

  @Metadata({ data: "json, name=AssociationVersion" })
  associationVersion?: string;

  @Metadata({ data: "json, name=DocumentVersion" })
  documentVersion?: string;

  @Metadata({ data: "json, name=InstanceId" })
  instanceId?: string;

  @Metadata({ data: "json, name=LastExecutionDate" })
  lastExecutionDate?: Date;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Overview" })
  overview?: AssociationOverview;

  @Metadata({ data: "json, name=ScheduleExpression" })
  scheduleExpression?: string;

  @Metadata({ data: "json, name=Targets", elemType: shared.Target })
  targets?: Target[];
}
