import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ProtocolTodGetConfigPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolTodGetConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolTodGetConfigPathParams;
}


export class ProtocolTodGetConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  configTod?: shared.ConfigTod;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
