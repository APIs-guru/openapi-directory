import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BatchGeneratePdfV1PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=template_id" })
  templateId: string;
}


export class BatchGeneratePdfV1Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiTokenBasic: shared.SchemeApiTokenBasic;
}

export enum BatchGeneratePdfV1CreateSubmissionResponseStatusEnum {
    Success = "success",
    Error = "error"
}


export class BatchGeneratePdfV1CreateSubmissionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: string[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: BatchGeneratePdfV1CreateSubmissionResponseStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=submission" })
  submission: shared.Submission;
}


export class BatchGeneratePdfV1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BatchGeneratePdfV1PathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Map<string, any>[];

  @SpeakeasyMetadata()
  security: BatchGeneratePdfV1Security;
}


export class BatchGeneratePdfV1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  authenticationError?: shared.AuthenticationError;

  @SpeakeasyMetadata({ elemType: BatchGeneratePdfV1CreateSubmissionResponse })
  createSubmissionResponses?: BatchGeneratePdfV1CreateSubmissionResponse[];

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata({ elemType: shared.InvalidRequest })
  invalidRequests?: shared.InvalidRequest[];
}
