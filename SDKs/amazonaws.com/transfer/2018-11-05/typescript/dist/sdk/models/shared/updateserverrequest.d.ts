import { SpeakeasyBase } from "../../../internal/utils";
import { EndpointDetails } from "./endpointdetails";
import { EndpointTypeEnum } from "./endpointtypeenum";
import { IdentityProviderDetails } from "./identityproviderdetails";
import { ProtocolDetails } from "./protocoldetails";
import { ProtocolEnum } from "./protocolenum";
import { WorkflowDetails } from "./workflowdetails";
export declare class UpdateServerRequest extends SpeakeasyBase {
    certificate?: string;
    endpointDetails?: EndpointDetails;
    endpointType?: EndpointTypeEnum;
    hostKey?: string;
    identityProviderDetails?: IdentityProviderDetails;
    loggingRole?: string;
    protocolDetails?: ProtocolDetails;
    protocols?: ProtocolEnum[];
    securityPolicyName?: string;
    serverId: string;
    workflowDetails?: WorkflowDetails;
}
