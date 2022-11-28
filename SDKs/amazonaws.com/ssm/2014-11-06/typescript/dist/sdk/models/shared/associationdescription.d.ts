import { SpeakeasyBase } from "../../../internal/utils";
import { AssociationComplianceSeverityEnum } from "./associationcomplianceseverityenum";
import { InstanceAssociationOutputLocation } from "./instanceassociationoutputlocation";
import { AssociationOverview } from "./associationoverview";
import { AssociationStatus } from "./associationstatus";
import { AssociationSyncComplianceEnum } from "./associationsynccomplianceenum";
import { TargetLocation } from "./targetlocation";
import { Target } from "./target";
/**
 * Describes the parameters for a document.
**/
export declare class AssociationDescription extends SpeakeasyBase {
    applyOnlyAtCronInterval?: boolean;
    associationId?: string;
    associationName?: string;
    associationVersion?: string;
    automationTargetParameterName?: string;
    calendarNames?: string[];
    complianceSeverity?: AssociationComplianceSeverityEnum;
    date?: Date;
    documentVersion?: string;
    instanceId?: string;
    lastExecutionDate?: Date;
    lastSuccessfulExecutionDate?: Date;
    lastUpdateAssociationDate?: Date;
    maxConcurrency?: string;
    maxErrors?: string;
    name?: string;
    outputLocation?: InstanceAssociationOutputLocation;
    overview?: AssociationOverview;
    parameters?: Map<string, string[]>;
    scheduleExpression?: string;
    status?: AssociationStatus;
    syncCompliance?: AssociationSyncComplianceEnum;
    targetLocations?: TargetLocation[];
    targets?: Target[];
}
