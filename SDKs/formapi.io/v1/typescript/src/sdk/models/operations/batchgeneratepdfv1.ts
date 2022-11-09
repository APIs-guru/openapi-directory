import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BatchGeneratePdfV1PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=template_id" })
  templateId: string;
}


export class BatchGeneratePdfV1Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiTokenBasic: shared.SchemeApiTokenBasic;
}


export class BatchGeneratePdfV1Request extends SpeakeasyBase {
  @Metadata()
  pathParams: BatchGeneratePdfV1PathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>[];

  @Metadata()
  security: BatchGeneratePdfV1Security;
}

export enum BatchGeneratePdfV1CreateSubmissionResponseStatusEnum {
    Success = "success"
,    Error = "error"
}


export class BatchGeneratePdfV1CreateSubmissionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors" })
  errors?: string[];

  @Metadata({ data: "json, name=status" })
  status: BatchGeneratePdfV1CreateSubmissionResponseStatusEnum;

  @Metadata({ data: "json, name=submission" })
  submission: shared.Submission;
}


export class BatchGeneratePdfV1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  authenticationError?: shared.AuthenticationError;

  @Metadata({ elemType: operations.BatchGeneratePdfV1CreateSubmissionResponse })
  createSubmissionResponses?: BatchGeneratePdfV1CreateSubmissionResponse[];

  @Metadata()
  error?: shared.Error;

  @Metadata({ elemType: shared.InvalidRequest })
  invalidRequests?: shared.InvalidRequest[];
}
