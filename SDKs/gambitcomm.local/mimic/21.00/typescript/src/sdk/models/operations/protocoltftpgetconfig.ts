import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProtocolTftpGetConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolTftpGetConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolTftpGetConfigPathParams;
}


export class ProtocolTftpGetConfigResponse extends SpeakeasyBase {
  @Metadata()
  configTftp?: shared.ConfigTftp;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
