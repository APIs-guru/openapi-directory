import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEnvironmentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=environmentId" })
  environmentId: string;
}


export class GetEnvironmentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetEnvironmentPathParams;
}


export class GetEnvironmentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  environmentModel?: shared.EnvironmentModel;

  @Metadata()
  environmentModelHaljson?: shared.EnvironmentModelHaljson;

  @Metadata()
  statusCode: number;
}
