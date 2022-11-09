import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSubmissionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=submission_id" })
  submissionId: string;
}


export class GetSubmissionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=include_data" })
  includeData?: boolean;
}


export class GetSubmissionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiTokenBasic: shared.SchemeApiTokenBasic;
}


export class GetSubmissionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSubmissionPathParams;

  @Metadata()
  queryParams: GetSubmissionQueryParams;

  @Metadata()
  security: GetSubmissionSecurity;
}


export class GetSubmissionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  authenticationError?: shared.AuthenticationError;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  submission?: shared.Submission;
}
