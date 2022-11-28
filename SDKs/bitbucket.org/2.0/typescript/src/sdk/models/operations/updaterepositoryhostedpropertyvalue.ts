import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateRepositoryHostedPropertyValuePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=app_key" })
  appKey: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=property_name" })
  propertyName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class UpdateRepositoryHostedPropertyValueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateRepositoryHostedPropertyValuePathParams;
}


export class UpdateRepositoryHostedPropertyValueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
