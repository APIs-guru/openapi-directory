import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProtocolEnum } from "./protocolenum";


export class TestIdentityProviderRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ServerId" })
  serverId: string;

  @Metadata({ data: "json, name=ServerProtocol" })
  serverProtocol?: ProtocolEnum;

  @Metadata({ data: "json, name=SourceIp" })
  sourceIp?: string;

  @Metadata({ data: "json, name=UserName" })
  userName: string;

  @Metadata({ data: "json, name=UserPassword" })
  userPassword?: string;
}
