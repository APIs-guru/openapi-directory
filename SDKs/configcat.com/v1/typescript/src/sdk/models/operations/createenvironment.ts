import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateEnvironmentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=productId" })
  productId: string;
}


export class CreateEnvironmentRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  createEnvironmentModel?: shared.CreateEnvironmentModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  createEnvironmentModel1?: shared.CreateEnvironmentModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  createEnvironmentModel2?: shared.CreateEnvironmentModel;
}


export class CreateEnvironmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateEnvironmentPathParams;

  @SpeakeasyMetadata()
  request: CreateEnvironmentRequests;
}


export class CreateEnvironmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  environmentModel?: shared.EnvironmentModel;

  @SpeakeasyMetadata()
  environmentModelHaljson?: shared.EnvironmentModelHaljson;

  @SpeakeasyMetadata()
  statusCode: number;
}
