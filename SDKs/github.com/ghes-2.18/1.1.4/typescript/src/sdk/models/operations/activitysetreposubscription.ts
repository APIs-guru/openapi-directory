import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ActivitySetRepoSubscriptionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ActivitySetRepoSubscriptionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ignored" })
  ignored?: boolean;

  @SpeakeasyMetadata({ data: "json, name=subscribed" })
  subscribed?: boolean;
}


export class ActivitySetRepoSubscriptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActivitySetRepoSubscriptionPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ActivitySetRepoSubscriptionRequestBody;
}


export class ActivitySetRepoSubscriptionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  repositorySubscription?: shared.RepositorySubscription;
}
