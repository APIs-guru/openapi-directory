import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeletePullRequestHostedPropertyValuePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=app_key" })
  appKey: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=property_name" })
  propertyName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=pullrequest_id" })
  pullrequestId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class DeletePullRequestHostedPropertyValueRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeletePullRequestHostedPropertyValuePathParams;
}


export class DeletePullRequestHostedPropertyValueResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
