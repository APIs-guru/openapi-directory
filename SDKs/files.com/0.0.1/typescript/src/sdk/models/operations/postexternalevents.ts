import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PostExternalEventsRequestBodyStatusEnum {
    Success = "success"
,    Error = "error"
,    PartialFailure = "partial_failure"
}


export class PostExternalEventsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=body" })
  body: string;

  @Metadata({ data: "multipart_form, name=status" })
  status: PostExternalEventsRequestBodyStatusEnum;
}


export class PostExternalEventsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: PostExternalEventsRequestBody;
}


export class PostExternalEventsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  externalEventEntity?: shared.ExternalEventEntity;

  @Metadata()
  statusCode: number;
}
