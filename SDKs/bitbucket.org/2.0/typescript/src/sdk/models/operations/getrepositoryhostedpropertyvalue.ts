import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRepositoryHostedPropertyValuePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=app_key" })
  appKey: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=property_name" })
  propertyName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class GetRepositoryHostedPropertyValueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRepositoryHostedPropertyValuePathParams;
}


export class GetRepositoryHostedPropertyValueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
