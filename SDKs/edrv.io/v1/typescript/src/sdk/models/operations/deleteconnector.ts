import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteConnectorPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteConnectorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteConnectorPathParams;
}


export class DeleteConnectorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
