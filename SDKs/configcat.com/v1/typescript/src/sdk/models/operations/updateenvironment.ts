import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateEnvironmentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=environmentId" })
  environmentId: string;
}


export class UpdateEnvironmentRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  updateEnvironmentModel?: shared.UpdateEnvironmentModel;

  @Metadata({ data: "request, media_type=application/json" })
  updateEnvironmentModel1?: shared.UpdateEnvironmentModel;

  @Metadata({ data: "request, media_type=text/json" })
  updateEnvironmentModel2?: shared.UpdateEnvironmentModel;
}


export class UpdateEnvironmentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateEnvironmentPathParams;

  @Metadata()
  request: UpdateEnvironmentRequests;
}


export class UpdateEnvironmentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  environmentModel?: shared.EnvironmentModel;

  @Metadata()
  environmentModelHaljson?: shared.EnvironmentModelHaljson;

  @Metadata()
  statusCode: number;
}
