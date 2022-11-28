import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ProtocolSshIpaliasListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolSshIpaliasListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolSshIpaliasListPathParams;
}


export class ProtocolSshIpaliasListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.IpAlias })
  ipAliases?: shared.IpAlias[];

  @SpeakeasyMetadata()
  statusCode: number;
}
