import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteRepositoryHostedPropertyValuePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=app_key" })
  appKey: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=property_name" })
  propertyName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class DeleteRepositoryHostedPropertyValueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteRepositoryHostedPropertyValuePathParams;
}


export class DeleteRepositoryHostedPropertyValueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
