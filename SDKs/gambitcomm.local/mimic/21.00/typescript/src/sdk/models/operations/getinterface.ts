import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetInterfacePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class GetInterfaceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetInterfacePathParams;
}


export class GetInterfaceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getInterface200ApplicationJsonString?: string;
}
