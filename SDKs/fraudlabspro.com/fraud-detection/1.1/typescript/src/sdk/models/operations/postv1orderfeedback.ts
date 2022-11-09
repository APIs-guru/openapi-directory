import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostV1OrderFeedbackActionEnum {
    Approve = "APPROVE"
,    Reject = "REJECT"
,    RejectBlacklist = "REJECT_BLACKLIST"
}

export enum PostV1OrderFeedbackFormatEnum {
    Json = "json"
,    Xml = "xml"
}


export class PostV1OrderFeedbackQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=action" })
  action: PostV1OrderFeedbackActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: PostV1OrderFeedbackFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=id" })
  id: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=notes" })
  notes?: string;
}


export class PostV1OrderFeedbackRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostV1OrderFeedbackQueryParams;
}


export class PostV1OrderFeedbackResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postV1OrderFeedback200ApplicationJsonString?: string;

  @Metadata()
  statusCode: number;
}
