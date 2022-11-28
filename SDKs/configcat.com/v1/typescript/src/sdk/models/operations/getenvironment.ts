import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEnvironmentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=environmentId" })
  environmentId: string;
}


export class GetEnvironmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEnvironmentPathParams;
}


export class GetEnvironmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  environmentModel?: shared.EnvironmentModel;

  @SpeakeasyMetadata()
  environmentModelHaljson?: shared.EnvironmentModelHaljson;

  @SpeakeasyMetadata()
  statusCode: number;
}
