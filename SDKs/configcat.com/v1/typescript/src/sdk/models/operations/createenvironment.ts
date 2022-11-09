import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateEnvironmentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=productId" })
  productId: string;
}


export class CreateEnvironmentRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  createEnvironmentModel?: shared.CreateEnvironmentModel;

  @Metadata({ data: "request, media_type=application/json" })
  createEnvironmentModel1?: shared.CreateEnvironmentModel;

  @Metadata({ data: "request, media_type=text/json" })
  createEnvironmentModel2?: shared.CreateEnvironmentModel;
}


export class CreateEnvironmentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateEnvironmentPathParams;

  @Metadata()
  request: CreateEnvironmentRequests;
}


export class CreateEnvironmentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  environmentModel?: shared.EnvironmentModel;

  @Metadata()
  environmentModelHaljson?: shared.EnvironmentModelHaljson;

  @Metadata()
  statusCode: number;
}
