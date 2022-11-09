import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteConnectorPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteConnectorRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteConnectorPathParams;
}


export class DeleteConnectorResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
