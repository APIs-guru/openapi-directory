import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssociationComplianceSeverityEnum } from "./associationcomplianceseverityenum";
import { InstanceAssociationOutputLocation } from "./instanceassociationoutputlocation";
import { AssociationSyncComplianceEnum } from "./associationsynccomplianceenum";
import { TargetLocation } from "./targetlocation";
import { Target } from "./target";



// AssociationVersionInfo
/** 
 * Information about the association version.
**/
export class AssociationVersionInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplyOnlyAtCronInterval" })
  applyOnlyAtCronInterval?: boolean;

  @SpeakeasyMetadata({ data: "json, name=AssociationId" })
  associationId?: string;

  @SpeakeasyMetadata({ data: "json, name=AssociationName" })
  associationName?: string;

  @SpeakeasyMetadata({ data: "json, name=AssociationVersion" })
  associationVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=CalendarNames" })
  calendarNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=ComplianceSeverity" })
  complianceSeverity?: AssociationComplianceSeverityEnum;

  @SpeakeasyMetadata({ data: "json, name=CreatedDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=DocumentVersion" })
  documentVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxConcurrency" })
  maxConcurrency?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxErrors" })
  maxErrors?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=OutputLocation" })
  outputLocation?: InstanceAssociationOutputLocation;

  @SpeakeasyMetadata({ data: "json, name=Parameters" })
  parameters?: Map<string, string[]>;

  @SpeakeasyMetadata({ data: "json, name=ScheduleExpression" })
  scheduleExpression?: string;

  @SpeakeasyMetadata({ data: "json, name=SyncCompliance" })
  syncCompliance?: AssociationSyncComplianceEnum;

  @SpeakeasyMetadata({ data: "json, name=TargetLocations", elemType: TargetLocation })
  targetLocations?: TargetLocation[];

  @SpeakeasyMetadata({ data: "json, name=Targets", elemType: Target })
  targets?: Target[];
}
