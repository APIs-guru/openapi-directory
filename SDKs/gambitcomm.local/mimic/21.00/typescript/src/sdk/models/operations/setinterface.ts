import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SetInterfacePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=interface" })
  interface: string;
}


export class SetInterfaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SetInterfacePathParams;
}


export class SetInterfaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  setInterface200ApplicationJsonString?: string;
}
