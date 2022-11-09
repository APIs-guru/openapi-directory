import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEnvironmentsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=productId" })
  productId: string;
}


export class GetEnvironmentsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetEnvironmentsPathParams;
}


export class GetEnvironmentsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.EnvironmentModelHaljson })
  environmentModelHaljsons?: shared.EnvironmentModelHaljson[];

  @Metadata({ elemType: shared.EnvironmentModel })
  environmentModels?: shared.EnvironmentModel[];

  @Metadata()
  statusCode: number;
}
