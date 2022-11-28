import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CreateBatchRequestBodyOperationEnum {
    Whois = "whois",
    Check = "check"
}

export enum CreateBatchRequestBodyOptionsFormatEnum {
    Raw = "raw",
    Formatted = "formatted",
    Json = "json"
}


export class CreateBatchRequestBodyOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: CreateBatchRequestBodyOptionsFormatEnum;
}


export class CreateBatchRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domains" })
  domains: string[];

  @SpeakeasyMetadata({ data: "json, name=operation" })
  operation: CreateBatchRequestBodyOperationEnum;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: CreateBatchRequestBodyOptions;
}


export class CreateBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateBatchRequestBody;
}


export class CreateBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batch?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
