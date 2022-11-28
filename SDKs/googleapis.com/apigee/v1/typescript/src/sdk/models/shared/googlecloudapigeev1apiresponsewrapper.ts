import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GoogleCloudApigeeV1ApiResponseWrapper extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorCode" })
  errorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
