import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DomainEnum } from "./domainenum";
import { EndpointTypeEnum } from "./endpointtypeenum";
import { IdentityProviderTypeEnum } from "./identityprovidertypeenum";
import { StateEnum } from "./stateenum";



// ListedServer
/** 
 * Returns properties of a file transfer protocol-enabled server that was specified.
**/
export class ListedServer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn: string;

  @SpeakeasyMetadata({ data: "json, name=Domain" })
  domain?: DomainEnum;

  @SpeakeasyMetadata({ data: "json, name=EndpointType" })
  endpointType?: EndpointTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=IdentityProviderType" })
  identityProviderType?: IdentityProviderTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=LoggingRole" })
  loggingRole?: string;

  @SpeakeasyMetadata({ data: "json, name=ServerId" })
  serverId?: string;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: StateEnum;

  @SpeakeasyMetadata({ data: "json, name=UserCount" })
  userCount?: number;
}
