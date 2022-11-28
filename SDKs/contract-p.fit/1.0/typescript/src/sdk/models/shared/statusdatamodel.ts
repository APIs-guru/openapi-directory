import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StatusDataModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=archived" })
  archived?: boolean;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: boolean;

  @SpeakeasyMetadata({ data: "json, name=escalate" })
  escalate?: boolean;

  @SpeakeasyMetadata({ data: "json, name=feedback" })
  feedback?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lock" })
  lock?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ready_accepted" })
  readyAccepted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ready_attempts" })
  readyAttempts?: number;

  @SpeakeasyMetadata({ data: "json, name=reject" })
  reject?: boolean;

  @SpeakeasyMetadata({ data: "json, name=reject_accepted" })
  rejectAccepted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=reject_attempts" })
  rejectAttempts?: number;

  @SpeakeasyMetadata({ data: "json, name=sampling" })
  sampling?: boolean;

  @SpeakeasyMetadata({ data: "json, name=submit_accepted" })
  submitAccepted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=submit_attempts" })
  submitAttempts?: number;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
