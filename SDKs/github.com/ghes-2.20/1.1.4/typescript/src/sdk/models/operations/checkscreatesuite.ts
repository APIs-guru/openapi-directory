import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ChecksCreateSuitePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ChecksCreateSuiteRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=head_sha" })
  headSha: string;
}


export class ChecksCreateSuiteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ChecksCreateSuitePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ChecksCreateSuiteRequestBody;
}


export class ChecksCreateSuiteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  checkSuite?: shared.CheckSuite;
}
