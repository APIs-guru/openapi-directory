import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=ApplyOnlyAtCronInterval" })
  applyOnlyAtCronInterval?: boolean;

  @SpeakeasyMetadata({ data: "json, name=AssociationId" })
  associationId?: string;

  @SpeakeasyMetadata({ data: "json, name=AssociationName" })
  associationName?: string;

  @SpeakeasyMetadata({ data: "json, name=AssociationVersion" })
  associationVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=AutomationTargetParameterName" })
  automationTargetParameterName?: string;

  @SpeakeasyMetadata({ data: "json, name=CalendarNames" })
  calendarNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=ComplianceSeverity" })
  complianceSeverity?: AssociationComplianceSeverityEnum;

  @SpeakeasyMetadata({ data: "json, name=Date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=DocumentVersion" })
  documentVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceId" })
  instanceId?: string;

  @SpeakeasyMetadata({ data: "json, name=LastExecutionDate" })
  lastExecutionDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastSuccessfulExecutionDate" })
  lastSuccessfulExecutionDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastUpdateAssociationDate" })
  lastUpdateAssociationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=MaxConcurrency" })
  maxConcurrency?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxErrors" })
  maxErrors?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=OutputLocation" })
  outputLocation?: InstanceAssociationOutputLocation;

  @SpeakeasyMetadata({ data: "json, name=Overview" })
  overview?: AssociationOverview;

  @SpeakeasyMetadata({ data: "json, name=Parameters" })
  parameters?: Map<string, string[]>;

  @SpeakeasyMetadata({ data: "json, name=ScheduleExpression" })
  scheduleExpression?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: AssociationStatus;

  @SpeakeasyMetadata({ data: "json, name=SyncCompliance" })
  syncCompliance?: AssociationSyncComplianceEnum;

  @SpeakeasyMetadata({ data: "json, name=TargetLocations", elemType: TargetLocation })
  targetLocations?: TargetLocation[];

  @SpeakeasyMetadata({ data: "json, name=Targets", elemType: Target })
  targets?: Target[];
}
