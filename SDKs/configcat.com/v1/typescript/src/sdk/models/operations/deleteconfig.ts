import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteConfigPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=configId" })
  configId: string;
}


export class DeleteConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteConfigPathParams;
}


export class DeleteConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
