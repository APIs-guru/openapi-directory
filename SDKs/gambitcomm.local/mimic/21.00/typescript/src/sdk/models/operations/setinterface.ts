import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SetInterfacePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=interface" })
  interface: string;
}


export class SetInterfaceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SetInterfacePathParams;
}


export class SetInterfaceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  setInterface200ApplicationJsonString?: string;
}
