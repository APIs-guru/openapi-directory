import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteCommitHostedPropertyValuePathParams extends SpeakeasyBase {
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


export class DeleteCommitHostedPropertyValueRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteCommitHostedPropertyValuePathParams;
}


export class DeleteCommitHostedPropertyValueResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
