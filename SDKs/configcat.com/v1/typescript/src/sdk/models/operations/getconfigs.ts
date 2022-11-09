import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetConfigsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=productId" })
  productId: string;
}


export class GetConfigsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetConfigsPathParams;
}


export class GetConfigsResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.ConfigModelHaljson })
  configModelHaljsons?: shared.ConfigModelHaljson[];

  @Metadata({ elemType: shared.ConfigModel })
  configModels?: shared.ConfigModel[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
