import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Status } from "./status";

export enum CapacityCommitmentPlanEnum {
    CommitmentPlanUnspecified = "COMMITMENT_PLAN_UNSPECIFIED"
,    Flex = "FLEX"
,    Trial = "TRIAL"
,    Monthly = "MONTHLY"
,    Annual = "ANNUAL"
}

export enum CapacityCommitmentRenewalPlanEnum {
    CommitmentPlanUnspecified = "COMMITMENT_PLAN_UNSPECIFIED"
,    Flex = "FLEX"
,    Trial = "TRIAL"
,    Monthly = "MONTHLY"
,    Annual = "ANNUAL"
}

export enum CapacityCommitmentStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Pending = "PENDING"
,    Active = "ACTIVE"
,    Failed = "FAILED"
}


// CapacityCommitment
/** 
 * Capacity commitment is a way to purchase compute capacity for BigQuery jobs (in the form of slots) with some committed period of usage. Annual commitments renew by default. Commitments can be removed after their commitment end time passes. In order to remove annual commitment, its plan needs to be changed to monthly or flex first. A capacity commitment resource exists as a child resource of the admin project.
**/
export class CapacityCommitment extends SpeakeasyBase {
  @Metadata({ data: "json, name=commitmentEndTime" })
  commitmentEndTime?: string;

  @Metadata({ data: "json, name=commitmentStartTime" })
  commitmentStartTime?: string;

  @Metadata({ data: "json, name=failureStatus" })
  failureStatus?: Status;

  @Metadata({ data: "json, name=multiRegionAuxiliary" })
  multiRegionAuxiliary?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=plan" })
  plan?: CapacityCommitmentPlanEnum;

  @Metadata({ data: "json, name=renewalPlan" })
  renewalPlan?: CapacityCommitmentRenewalPlanEnum;

  @Metadata({ data: "json, name=slotCount" })
  slotCount?: string;

  @Metadata({ data: "json, name=state" })
  state?: CapacityCommitmentStateEnum;
}
