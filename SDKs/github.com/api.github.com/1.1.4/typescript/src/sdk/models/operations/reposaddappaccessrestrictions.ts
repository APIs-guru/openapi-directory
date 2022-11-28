import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReposAddAppAccessRestrictionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=branch" })
  branch: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposAddAppAccessRestrictionsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apps" })
  apps: string[];
}


export class ReposAddAppAccessRestrictionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposAddAppAccessRestrictionsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ReposAddAppAccessRestrictionsRequestBody;
}


export class ReposAddAppAccessRestrictionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  integrations?: Map<string, any>[];

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
