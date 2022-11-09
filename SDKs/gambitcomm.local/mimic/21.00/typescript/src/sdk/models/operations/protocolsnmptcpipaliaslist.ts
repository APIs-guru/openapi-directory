import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProtocolSnmptcpIpaliasListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolSnmptcpIpaliasListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolSnmptcpIpaliasListPathParams;
}


export class ProtocolSnmptcpIpaliasListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.IpAlias })
  ipAliases?: shared.IpAlias[];

  @Metadata()
  statusCode: number;
}
