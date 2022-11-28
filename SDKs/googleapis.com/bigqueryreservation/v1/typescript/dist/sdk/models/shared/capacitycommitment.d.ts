import { SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
export declare enum CapacityCommitmentPlanEnum {
    CommitmentPlanUnspecified = "COMMITMENT_PLAN_UNSPECIFIED",
    Flex = "FLEX",
    Trial = "TRIAL",
    Monthly = "MONTHLY",
    Annual = "ANNUAL"
}
export declare enum CapacityCommitmentRenewalPlanEnum {
    CommitmentPlanUnspecified = "COMMITMENT_PLAN_UNSPECIFIED",
    Flex = "FLEX",
    Trial = "TRIAL",
    Monthly = "MONTHLY",
    Annual = "ANNUAL"
}
export declare enum CapacityCommitmentStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Pending = "PENDING",
    Active = "ACTIVE",
    Failed = "FAILED"
}
/**
 * Capacity commitment is a way to purchase compute capacity for BigQuery jobs (in the form of slots) with some committed period of usage. Annual commitments renew by default. Commitments can be removed after their commitment end time passes. In order to remove annual commitment, its plan needs to be changed to monthly or flex first. A capacity commitment resource exists as a child resource of the admin project.
**/
export declare class CapacityCommitment extends SpeakeasyBase {
    commitmentEndTime?: string;
    commitmentStartTime?: string;
    failureStatus?: Status;
    multiRegionAuxiliary?: boolean;
    name?: string;
    plan?: CapacityCommitmentPlanEnum;
    renewalPlan?: CapacityCommitmentRenewalPlanEnum;
    slotCount?: string;
    state?: CapacityCommitmentStateEnum;
}
/**
 * Capacity commitment is a way to purchase compute capacity for BigQuery jobs (in the form of slots) with some committed period of usage. Annual commitments renew by default. Commitments can be removed after their commitment end time passes. In order to remove annual commitment, its plan needs to be changed to monthly or flex first. A capacity commitment resource exists as a child resource of the admin project.
**/
export declare class CapacityCommitmentInput extends SpeakeasyBase {
    failureStatus?: Status;
    multiRegionAuxiliary?: boolean;
    plan?: CapacityCommitmentPlanEnum;
    renewalPlan?: CapacityCommitmentRenewalPlanEnum;
    slotCount?: string;
}
