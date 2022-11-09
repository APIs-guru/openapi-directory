import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetCommitHostedPropertyValuePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=app_key" })
  appKey: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=commit" })
  commit: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=property_name" })
  propertyName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class GetCommitHostedPropertyValueRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCommitHostedPropertyValuePathParams;
}


export class GetCommitHostedPropertyValueResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
