import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ProtocolTftpGetConfigPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolTftpGetConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolTftpGetConfigPathParams;
}


export class ProtocolTftpGetConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  configTftp?: shared.ConfigTftp;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
