import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EndpointDetails } from "./endpointdetails";
import { EndpointTypeEnum } from "./endpointtypeenum";
import { IdentityProviderDetails } from "./identityproviderdetails";
import { ProtocolDetails } from "./protocoldetails";
import { ProtocolEnum } from "./protocolenum";
import { WorkflowDetails } from "./workflowdetails";


export class UpdateServerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Certificate" })
  certificate?: string;

  @Metadata({ data: "json, name=EndpointDetails" })
  endpointDetails?: EndpointDetails;

  @Metadata({ data: "json, name=EndpointType" })
  endpointType?: EndpointTypeEnum;

  @Metadata({ data: "json, name=HostKey" })
  hostKey?: string;

  @Metadata({ data: "json, name=IdentityProviderDetails" })
  identityProviderDetails?: IdentityProviderDetails;

  @Metadata({ data: "json, name=LoggingRole" })
  loggingRole?: string;

  @Metadata({ data: "json, name=ProtocolDetails" })
  protocolDetails?: ProtocolDetails;

  @Metadata({ data: "json, name=Protocols" })
  protocols?: ProtocolEnum[];

  @Metadata({ data: "json, name=SecurityPolicyName" })
  securityPolicyName?: string;

  @Metadata({ data: "json, name=ServerId" })
  serverId: string;

  @Metadata({ data: "json, name=WorkflowDetails" })
  workflowDetails?: WorkflowDetails;
}
