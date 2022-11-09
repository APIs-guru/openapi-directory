import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProtocolTelnetServerGetUsersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolTelnetServerGetUsersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolTelnetServerGetUsersPathParams;
}


export class ProtocolTelnetServerGetUsersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.TelnetUser })
  telnetUsers?: shared.TelnetUser[];
}
