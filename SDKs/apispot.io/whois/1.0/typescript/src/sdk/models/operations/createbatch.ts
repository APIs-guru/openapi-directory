import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CreateBatchRequestBodyOperationEnum {
    Whois = "whois"
,    Check = "check"
}

export enum CreateBatchRequestBodyOptionsFormatEnum {
    Raw = "raw"
,    Formatted = "formatted"
,    Json = "json"
}


export class CreateBatchRequestBodyOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=format" })
  format?: CreateBatchRequestBodyOptionsFormatEnum;
}


export class CreateBatchRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=domains" })
  domains: string[];

  @Metadata({ data: "json, name=operation" })
  operation: CreateBatchRequestBodyOperationEnum;

  @Metadata({ data: "json, name=options" })
  options?: CreateBatchRequestBodyOptions;
}


export class CreateBatchRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: CreateBatchRequestBody;
}


export class CreateBatchResponse extends SpeakeasyBase {
  @Metadata()
  batch?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
