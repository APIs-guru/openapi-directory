import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DomainEnum } from "./domainenum";
import { EndpointDetails } from "./endpointdetails";
import { EndpointTypeEnum } from "./endpointtypeenum";
import { IdentityProviderDetails } from "./identityproviderdetails";
import { IdentityProviderTypeEnum } from "./identityprovidertypeenum";
import { ProtocolDetails } from "./protocoldetails";
import { ProtocolEnum } from "./protocolenum";
import { StateEnum } from "./stateenum";
import { Tag } from "./tag";
import { WorkflowDetails } from "./workflowdetails";


// DescribedServer
/** 
 * Describes the properties of a file transfer protocol-enabled server that was specified.
**/
export class DescribedServer extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn: string;

  @Metadata({ data: "json, name=Certificate" })
  certificate?: string;

  @Metadata({ data: "json, name=Domain" })
  domain?: DomainEnum;

  @Metadata({ data: "json, name=EndpointDetails" })
  endpointDetails?: EndpointDetails;

  @Metadata({ data: "json, name=EndpointType" })
  endpointType?: EndpointTypeEnum;

  @Metadata({ data: "json, name=HostKeyFingerprint" })
  hostKeyFingerprint?: string;

  @Metadata({ data: "json, name=IdentityProviderDetails" })
  identityProviderDetails?: IdentityProviderDetails;

  @Metadata({ data: "json, name=IdentityProviderType" })
  identityProviderType?: IdentityProviderTypeEnum;

  @Metadata({ data: "json, name=LoggingRole" })
  loggingRole?: string;

  @Metadata({ data: "json, name=ProtocolDetails" })
  protocolDetails?: ProtocolDetails;

  @Metadata({ data: "json, name=Protocols" })
  protocols?: ProtocolEnum[];

  @Metadata({ data: "json, name=SecurityPolicyName" })
  securityPolicyName?: string;

  @Metadata({ data: "json, name=ServerId" })
  serverId?: string;

  @Metadata({ data: "json, name=State" })
  state?: StateEnum;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=UserCount" })
  userCount?: number;

  @Metadata({ data: "json, name=WorkflowDetails" })
  workflowDetails?: WorkflowDetails;
}
