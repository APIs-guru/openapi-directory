import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolWebPortSetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=port" })
  port: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=protocol" })
  protocol: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class ProtocolWebPortSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolWebPortSetPathParams;
}


export class ProtocolWebPortSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolWebPortSet200ApplicationJsonString?: string;
}
