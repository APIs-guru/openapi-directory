import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ChecksRerequestSuitePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=check_suite_id" })
  checkSuiteId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ChecksRerequestSuiteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ChecksRerequestSuitePathParams;
}


export class ChecksRerequestSuiteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  checksRerequestSuite201ApplicationJsonObject?: Map<string, any>;
}
