import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum PostExternalEventsRequestBodyStatusEnum {
    Success = "success",
    Error = "error",
    PartialFailure = "partial_failure"
}


export class PostExternalEventsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=body" })
  body: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=status" })
  status: PostExternalEventsRequestBodyStatusEnum;
}


export class PostExternalEventsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: PostExternalEventsRequestBody;
}


export class PostExternalEventsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  externalEventEntity?: shared.ExternalEventEntity;

  @SpeakeasyMetadata()
  statusCode: number;
}
