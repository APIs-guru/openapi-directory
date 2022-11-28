import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Example13 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=can_enroll" })
  canEnroll: boolean;

  @SpeakeasyMetadata({ data: "json, name=enrollment_state" })
  enrollmentState: number;

  @SpeakeasyMetadata({ data: "json, name=error_code" })
  errorCode: number;

  @SpeakeasyMetadata({ data: "json, name=ready" })
  ready: boolean;

  @SpeakeasyMetadata({ data: "json, name=retryable" })
  retryable: boolean;
}
