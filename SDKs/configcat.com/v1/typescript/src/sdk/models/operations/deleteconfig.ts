import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=configId" })
  configId: string;
}


export class DeleteConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteConfigPathParams;
}


export class DeleteConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
