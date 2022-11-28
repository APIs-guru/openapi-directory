import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetConfigsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=productId" })
  productId: string;
}


export class GetConfigsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetConfigsPathParams;
}


export class GetConfigsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.ConfigModelHaljson })
  configModelHaljsons?: shared.ConfigModelHaljson[];

  @SpeakeasyMetadata({ elemType: shared.ConfigModel })
  configModels?: shared.ConfigModel[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
