import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProtocolTftpGetTracePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolTftpGetTraceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolTftpGetTracePathParams;
}


export class ProtocolTftpGetTraceResponse extends SpeakeasyBase {
  @Metadata()
  configTftp?: shared.ConfigTftp;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
