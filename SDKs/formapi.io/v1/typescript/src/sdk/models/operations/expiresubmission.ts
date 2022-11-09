import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ExpireSubmissionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=submission_id" })
  submissionId: string;
}


export class ExpireSubmissionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiTokenBasic: shared.SchemeApiTokenBasic;
}


export class ExpireSubmissionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ExpireSubmissionPathParams;

  @Metadata()
  security: ExpireSubmissionSecurity;
}


export class ExpireSubmissionResponse extends SpeakeasyBase {
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
