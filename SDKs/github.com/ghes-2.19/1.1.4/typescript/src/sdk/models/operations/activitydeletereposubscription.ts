import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ActivityDeleteRepoSubscriptionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ActivityDeleteRepoSubscriptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActivityDeleteRepoSubscriptionPathParams;
}


export class ActivityDeleteRepoSubscriptionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
