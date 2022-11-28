import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEnvironmentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=productId" })
  productId: string;
}


export class GetEnvironmentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEnvironmentsPathParams;
}


export class GetEnvironmentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.EnvironmentModelHaljson })
  environmentModelHaljsons?: shared.EnvironmentModelHaljson[];

  @SpeakeasyMetadata({ elemType: shared.EnvironmentModel })
  environmentModels?: shared.EnvironmentModel[];

  @SpeakeasyMetadata()
  statusCode: number;
}
