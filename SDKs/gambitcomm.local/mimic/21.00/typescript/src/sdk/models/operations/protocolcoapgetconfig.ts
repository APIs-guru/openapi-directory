import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ProtocolCoapGetConfigPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolCoapGetConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolCoapGetConfigPathParams;
}


export class ProtocolCoapGetConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  configCoap?: shared.ConfigCoap;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
