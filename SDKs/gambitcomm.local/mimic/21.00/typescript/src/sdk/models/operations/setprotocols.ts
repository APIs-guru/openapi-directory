import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SetProtocolsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class SetProtocolsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SetProtocolsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: string[];
}


export class SetProtocolsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  setProtocols200ApplicationJsonStringIntegers?: number[];
}
