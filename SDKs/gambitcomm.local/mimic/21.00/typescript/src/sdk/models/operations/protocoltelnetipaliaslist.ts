import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProtocolTelnetIpaliasListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolTelnetIpaliasListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolTelnetIpaliasListPathParams;
}


export class ProtocolTelnetIpaliasListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.IpAlias })
  ipAliases?: shared.IpAlias[];

  @Metadata()
  statusCode: number;
}
