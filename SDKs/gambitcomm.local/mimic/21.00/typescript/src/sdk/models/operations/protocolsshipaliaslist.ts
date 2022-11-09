import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProtocolSshIpaliasListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolSshIpaliasListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolSshIpaliasListPathParams;
}


export class ProtocolSshIpaliasListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.IpAlias })
  ipAliases?: shared.IpAlias[];

  @Metadata()
  statusCode: number;
}
