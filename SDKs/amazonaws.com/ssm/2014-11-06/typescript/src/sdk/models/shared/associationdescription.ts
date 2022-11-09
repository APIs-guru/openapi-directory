import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AssociationComplianceSeverityEnum } from "./associationcomplianceseverityenum";
import { InstanceAssociationOutputLocation } from "./instanceassociationoutputlocation";
import { AssociationOverview } from "./associationoverview";
import { AssociationStatus } from "./associationstatus";
import { AssociationSyncComplianceEnum } from "./associationsynccomplianceenum";
import { TargetLocation } from "./targetlocation";
import { Target } from "./target";


// AssociationDescription
/** 
 * Describes the parameters for a document.
**/
export class AssociationDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplyOnlyAtCronInterval" })
  applyOnlyAtCronInterval?: boolean;

  @Metadata({ data: "json, name=AssociationId" })
  associationId?: string;

  @Metadata({ data: "json, name=AssociationName" })
  associationName?: string;

  @Metadata({ data: "json, name=AssociationVersion" })
  associationVersion?: string;

  @Metadata({ data: "json, name=AutomationTargetParameterName" })
  automationTargetParameterName?: string;

  @Metadata({ data: "json, name=CalendarNames" })
  calendarNames?: string[];

  @Metadata({ data: "json, name=ComplianceSeverity" })
  complianceSeverity?: AssociationComplianceSeverityEnum;

  @Metadata({ data: "json, name=Date" })
  date?: Date;

  @Metadata({ data: "json, name=DocumentVersion" })
  documentVersion?: string;

  @Metadata({ data: "json, name=InstanceId" })
  instanceId?: string;

  @Metadata({ data: "json, name=LastExecutionDate" })
  lastExecutionDate?: Date;

  @Metadata({ data: "json, name=LastSuccessfulExecutionDate" })
  lastSuccessfulExecutionDate?: Date;

  @Metadata({ data: "json, name=LastUpdateAssociationDate" })
  lastUpdateAssociationDate?: Date;

  @Metadata({ data: "json, name=MaxConcurrency" })
  maxConcurrency?: string;

  @Metadata({ data: "json, name=MaxErrors" })
  maxErrors?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=OutputLocation" })
  outputLocation?: InstanceAssociationOutputLocation;

  @Metadata({ data: "json, name=Overview" })
  overview?: AssociationOverview;

  @Metadata({ data: "json, name=Parameters" })
  parameters?: Map<string, string[]>;

  @Metadata({ data: "json, name=ScheduleExpression" })
  scheduleExpression?: string;

  @Metadata({ data: "json, name=Status" })
  status?: AssociationStatus;

  @Metadata({ data: "json, name=SyncCompliance" })
  syncCompliance?: AssociationSyncComplianceEnum;

  @Metadata({ data: "json, name=TargetLocations", elemType: shared.TargetLocation })
  targetLocations?: TargetLocation[];

  @Metadata({ data: "json, name=Targets", elemType: shared.Target })
  targets?: Target[];
}
