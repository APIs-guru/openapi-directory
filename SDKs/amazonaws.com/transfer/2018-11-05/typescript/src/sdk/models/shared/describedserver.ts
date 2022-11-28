import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn: string;

  @SpeakeasyMetadata({ data: "json, name=Certificate" })
  certificate?: string;

  @SpeakeasyMetadata({ data: "json, name=Domain" })
  domain?: DomainEnum;

  @SpeakeasyMetadata({ data: "json, name=EndpointDetails" })
  endpointDetails?: EndpointDetails;

  @SpeakeasyMetadata({ data: "json, name=EndpointType" })
  endpointType?: EndpointTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=HostKeyFingerprint" })
  hostKeyFingerprint?: string;

  @SpeakeasyMetadata({ data: "json, name=IdentityProviderDetails" })
  identityProviderDetails?: IdentityProviderDetails;

  @SpeakeasyMetadata({ data: "json, name=IdentityProviderType" })
  identityProviderType?: IdentityProviderTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=LoggingRole" })
  loggingRole?: string;

  @SpeakeasyMetadata({ data: "json, name=ProtocolDetails" })
  protocolDetails?: ProtocolDetails;

  @SpeakeasyMetadata({ data: "json, name=Protocols" })
  protocols?: ProtocolEnum[];

  @SpeakeasyMetadata({ data: "json, name=SecurityPolicyName" })
  securityPolicyName?: string;

  @SpeakeasyMetadata({ data: "json, name=ServerId" })
  serverId?: string;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: StateEnum;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=UserCount" })
  userCount?: number;

  @SpeakeasyMetadata({ data: "json, name=WorkflowDetails" })
  workflowDetails?: WorkflowDetails;
}
