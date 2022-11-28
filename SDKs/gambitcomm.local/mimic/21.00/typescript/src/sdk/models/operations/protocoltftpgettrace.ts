import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ProtocolTftpGetTracePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolTftpGetTraceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolTftpGetTracePathParams;
}


export class ProtocolTftpGetTraceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  configTftp?: shared.ConfigTftp;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
