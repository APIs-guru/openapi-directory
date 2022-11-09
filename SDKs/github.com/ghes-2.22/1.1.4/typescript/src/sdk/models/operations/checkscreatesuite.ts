import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ChecksCreateSuitePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ChecksCreateSuiteRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=head_sha" })
  headSha: string;
}


export class ChecksCreateSuiteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ChecksCreateSuitePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ChecksCreateSuiteRequestBody;
}


export class ChecksCreateSuiteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  checkSuite?: shared.CheckSuite;
}
