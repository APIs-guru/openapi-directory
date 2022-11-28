import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostV1OrderFeedbackActionEnum {
    Approve = "APPROVE",
    Reject = "REJECT",
    RejectBlacklist = "REJECT_BLACKLIST"
}

export enum PostV1OrderFeedbackFormatEnum {
    Json = "json",
    Xml = "xml"
}


export class PostV1OrderFeedbackQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=action" })
  action: PostV1OrderFeedbackActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: PostV1OrderFeedbackFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=notes" })
  notes?: string;
}


export class PostV1OrderFeedbackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostV1OrderFeedbackQueryParams;
}


export class PostV1OrderFeedbackResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postV1OrderFeedback200ApplicationJsonString?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
