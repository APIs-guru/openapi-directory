import { SpeakeasyBase } from "../../../internal/utils";
import { AssociationComplianceSeverityEnum } from "./associationcomplianceseverityenum";
import { InstanceAssociationOutputLocation } from "./instanceassociationoutputlocation";
import { AssociationSyncComplianceEnum } from "./associationsynccomplianceenum";
import { TargetLocation } from "./targetlocation";
import { Target } from "./target";
export declare class CreateAssociationRequest extends SpeakeasyBase {
    applyOnlyAtCronInterval?: boolean;
    associationName?: string;
    automationTargetParameterName?: string;
    calendarNames?: string[];
    complianceSeverity?: AssociationComplianceSeverityEnum;
    documentVersion?: string;
    instanceId?: string;
    maxConcurrency?: string;
    maxErrors?: string;
    name: string;
    outputLocation?: InstanceAssociationOutputLocation;
    parameters?: Map<string, string[]>;
    scheduleExpression?: string;
    syncCompliance?: AssociationSyncComplianceEnum;
    targetLocations?: TargetLocation[];
    targets?: Target[];
}
