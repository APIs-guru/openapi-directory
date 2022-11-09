import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActivitySetRepoSubscriptionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ActivitySetRepoSubscriptionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ignored" })
  ignored?: boolean;

  @Metadata({ data: "json, name=subscribed" })
  subscribed?: boolean;
}


export class ActivitySetRepoSubscriptionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActivitySetRepoSubscriptionPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ActivitySetRepoSubscriptionRequestBody;
}


export class ActivitySetRepoSubscriptionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  repositorySubscription?: shared.RepositorySubscription;
}
