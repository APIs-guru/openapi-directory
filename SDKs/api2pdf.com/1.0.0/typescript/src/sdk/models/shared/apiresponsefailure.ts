import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApiResponseFailure extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
