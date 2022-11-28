import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdatePullRequestHostedPropertyValuePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=app_key" })
  appKey: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=property_name" })
  propertyName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pullrequest_id" })
  pullrequestId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class UpdatePullRequestHostedPropertyValueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdatePullRequestHostedPropertyValuePathParams;
}


export class UpdatePullRequestHostedPropertyValueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
