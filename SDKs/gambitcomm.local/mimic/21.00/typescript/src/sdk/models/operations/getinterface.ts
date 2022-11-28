import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetInterfacePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class GetInterfaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetInterfacePathParams;
}


export class GetInterfaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getInterface200ApplicationJsonString?: string;
}
