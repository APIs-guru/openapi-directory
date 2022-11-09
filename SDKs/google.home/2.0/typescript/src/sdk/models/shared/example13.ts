import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Example13 extends SpeakeasyBase {
  @Metadata({ data: "json, name=can_enroll" })
  canEnroll: boolean;

  @Metadata({ data: "json, name=enrollment_state" })
  enrollmentState: number;

  @Metadata({ data: "json, name=error_code" })
  errorCode: number;

  @Metadata({ data: "json, name=ready" })
  ready: boolean;

  @Metadata({ data: "json, name=retryable" })
  retryable: boolean;
}
