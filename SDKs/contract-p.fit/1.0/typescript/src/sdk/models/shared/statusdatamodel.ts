import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StatusDataModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=archived" })
  archived?: boolean;

  @Metadata({ data: "json, name=data" })
  data?: boolean;

  @Metadata({ data: "json, name=escalate" })
  escalate?: boolean;

  @Metadata({ data: "json, name=feedback" })
  feedback?: boolean;

  @Metadata({ data: "json, name=lock" })
  lock?: boolean;

  @Metadata({ data: "json, name=ready_accepted" })
  readyAccepted?: boolean;

  @Metadata({ data: "json, name=ready_attempts" })
  readyAttempts?: number;

  @Metadata({ data: "json, name=reject" })
  reject?: boolean;

  @Metadata({ data: "json, name=reject_accepted" })
  rejectAccepted?: boolean;

  @Metadata({ data: "json, name=reject_attempts" })
  rejectAttempts?: number;

  @Metadata({ data: "json, name=sampling" })
  sampling?: boolean;

  @Metadata({ data: "json, name=submit_accepted" })
  submitAccepted?: boolean;

  @Metadata({ data: "json, name=submit_attempts" })
  submitAttempts?: number;

  @Metadata({ data: "json, name=success" })
  success?: boolean;
}
