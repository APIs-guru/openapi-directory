import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateEnvironmentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=environmentId" })
  environmentId: string;
}


export class UpdateEnvironmentRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  updateEnvironmentModel?: shared.UpdateEnvironmentModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  updateEnvironmentModel1?: shared.UpdateEnvironmentModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  updateEnvironmentModel2?: shared.UpdateEnvironmentModel;
}


export class UpdateEnvironmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateEnvironmentPathParams;

  @SpeakeasyMetadata()
  request: UpdateEnvironmentRequests;
}


export class UpdateEnvironmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  environmentModel?: shared.EnvironmentModel;

  @SpeakeasyMetadata()
  environmentModelHaljson?: shared.EnvironmentModelHaljson;

  @SpeakeasyMetadata()
  statusCode: number;
}
