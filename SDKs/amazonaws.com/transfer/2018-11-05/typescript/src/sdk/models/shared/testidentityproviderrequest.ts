import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProtocolEnum } from "./protocolenum";



export class TestIdentityProviderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ServerId" })
  serverId: string;

  @SpeakeasyMetadata({ data: "json, name=ServerProtocol" })
  serverProtocol?: ProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=SourceIp" })
  sourceIp?: string;

  @SpeakeasyMetadata({ data: "json, name=UserName" })
  userName: string;

  @SpeakeasyMetadata({ data: "json, name=UserPassword" })
  userPassword?: string;
}
