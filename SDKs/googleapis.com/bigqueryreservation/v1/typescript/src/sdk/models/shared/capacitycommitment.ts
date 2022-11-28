import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";


export enum CapacityCommitmentPlanEnum {
    CommitmentPlanUnspecified = "COMMITMENT_PLAN_UNSPECIFIED",
    Flex = "FLEX",
    Trial = "TRIAL",
    Monthly = "MONTHLY",
    Annual = "ANNUAL"
}

export enum CapacityCommitmentRenewalPlanEnum {
    CommitmentPlanUnspecified = "COMMITMENT_PLAN_UNSPECIFIED",
    Flex = "FLEX",
    Trial = "TRIAL",
    Monthly = "MONTHLY",
    Annual = "ANNUAL"
}

export enum CapacityCommitmentStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Pending = "PENDING",
    Active = "ACTIVE",
    Failed = "FAILED"
}


// CapacityCommitment
/** 
 * Capacity commitment is a way to purchase compute capacity for BigQuery jobs (in the form of slots) with some committed period of usage. Annual commitments renew by default. Commitments can be removed after their commitment end time passes. In order to remove annual commitment, its plan needs to be changed to monthly or flex first. A capacity commitment resource exists as a child resource of the admin project.
**/
export class CapacityCommitment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commitmentEndTime" })
  commitmentEndTime?: string;

  @SpeakeasyMetadata({ data: "json, name=commitmentStartTime" })
  commitmentStartTime?: string;

  @SpeakeasyMetadata({ data: "json, name=failureStatus" })
  failureStatus?: Status;

  @SpeakeasyMetadata({ data: "json, name=multiRegionAuxiliary" })
  multiRegionAuxiliary?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=plan" })
  plan?: CapacityCommitmentPlanEnum;

  @SpeakeasyMetadata({ data: "json, name=renewalPlan" })
  renewalPlan?: CapacityCommitmentRenewalPlanEnum;

  @SpeakeasyMetadata({ data: "json, name=slotCount" })
  slotCount?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: CapacityCommitmentStateEnum;
}


// CapacityCommitmentInput
/** 
 * Capacity commitment is a way to purchase compute capacity for BigQuery jobs (in the form of slots) with some committed period of usage. Annual commitments renew by default. Commitments can be removed after their commitment end time passes. In order to remove annual commitment, its plan needs to be changed to monthly or flex first. A capacity commitment resource exists as a child resource of the admin project.
**/
export class CapacityCommitmentInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=failureStatus" })
  failureStatus?: Status;

  @SpeakeasyMetadata({ data: "json, name=multiRegionAuxiliary" })
  multiRegionAuxiliary?: boolean;

  @SpeakeasyMetadata({ data: "json, name=plan" })
  plan?: CapacityCommitmentPlanEnum;

  @SpeakeasyMetadata({ data: "json, name=renewalPlan" })
  renewalPlan?: CapacityCommitmentRenewalPlanEnum;

  @SpeakeasyMetadata({ data: "json, name=slotCount" })
  slotCount?: string;
}
