import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPullRequestHostedPropertyValuePathParams extends SpeakeasyBase {
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


export class GetPullRequestHostedPropertyValueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPullRequestHostedPropertyValuePathParams;
}


export class GetPullRequestHostedPropertyValueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
