import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ChecksGetSuitePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=check_suite_id" })
  checkSuiteId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ChecksGetSuiteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ChecksGetSuitePathParams;
}


export class ChecksGetSuiteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  checkSuite?: shared.CheckSuite;
}
