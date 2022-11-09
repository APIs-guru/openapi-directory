import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ChecksRerequestSuitePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=check_suite_id" })
  checkSuiteId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ChecksRerequestSuiteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ChecksRerequestSuitePathParams;
}


export class ChecksRerequestSuiteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  checksRerequestSuite201ApplicationJsonObject?: Map<string, any>;
}
