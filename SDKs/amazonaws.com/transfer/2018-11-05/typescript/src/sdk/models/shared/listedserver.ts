import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DomainEnum } from "./domainenum";
import { EndpointTypeEnum } from "./endpointtypeenum";
import { IdentityProviderTypeEnum } from "./identityprovidertypeenum";
import { StateEnum } from "./stateenum";


// ListedServer
/** 
 * Returns properties of a file transfer protocol-enabled server that was specified.
**/
export class ListedServer extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn: string;

  @Metadata({ data: "json, name=Domain" })
  domain?: DomainEnum;

  @Metadata({ data: "json, name=EndpointType" })
  endpointType?: EndpointTypeEnum;

  @Metadata({ data: "json, name=IdentityProviderType" })
  identityProviderType?: IdentityProviderTypeEnum;

  @Metadata({ data: "json, name=LoggingRole" })
  loggingRole?: string;

  @Metadata({ data: "json, name=ServerId" })
  serverId?: string;

  @Metadata({ data: "json, name=State" })
  state?: StateEnum;

  @Metadata({ data: "json, name=UserCount" })
  userCount?: number;
}
