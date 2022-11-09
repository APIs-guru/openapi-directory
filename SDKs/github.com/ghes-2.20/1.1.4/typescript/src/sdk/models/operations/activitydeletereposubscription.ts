import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ActivityDeleteRepoSubscriptionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ActivityDeleteRepoSubscriptionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActivityDeleteRepoSubscriptionPathParams;
}


export class ActivityDeleteRepoSubscriptionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
