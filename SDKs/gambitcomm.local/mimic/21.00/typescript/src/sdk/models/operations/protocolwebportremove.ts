import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolWebPortRemovePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=port" })
  port: number;
}


export class ProtocolWebPortRemoveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolWebPortRemovePathParams;
}


export class ProtocolWebPortRemoveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolWebPortRemove200ApplicationJsonString?: string;
}
