import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EndpointDetails } from "./endpointdetails";
import { EndpointTypeEnum } from "./endpointtypeenum";
import { IdentityProviderDetails } from "./identityproviderdetails";
import { ProtocolDetails } from "./protocoldetails";
import { ProtocolEnum } from "./protocolenum";
import { WorkflowDetails } from "./workflowdetails";



export class UpdateServerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Certificate" })
  certificate?: string;

  @SpeakeasyMetadata({ data: "json, name=EndpointDetails" })
  endpointDetails?: EndpointDetails;

  @SpeakeasyMetadata({ data: "json, name=EndpointType" })
  endpointType?: EndpointTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=HostKey" })
  hostKey?: string;

  @SpeakeasyMetadata({ data: "json, name=IdentityProviderDetails" })
  identityProviderDetails?: IdentityProviderDetails;

  @SpeakeasyMetadata({ data: "json, name=LoggingRole" })
  loggingRole?: string;

  @SpeakeasyMetadata({ data: "json, name=ProtocolDetails" })
  protocolDetails?: ProtocolDetails;

  @SpeakeasyMetadata({ data: "json, name=Protocols" })
  protocols?: ProtocolEnum[];

  @SpeakeasyMetadata({ data: "json, name=SecurityPolicyName" })
  securityPolicyName?: string;

  @SpeakeasyMetadata({ data: "json, name=ServerId" })
  serverId: string;

  @SpeakeasyMetadata({ data: "json, name=WorkflowDetails" })
  workflowDetails?: WorkflowDetails;
}
