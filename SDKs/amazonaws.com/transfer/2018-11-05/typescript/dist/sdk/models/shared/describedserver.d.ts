import { SpeakeasyBase } from "../../../internal/utils";
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
/**
 * Describes the properties of a file transfer protocol-enabled server that was specified.
**/
export declare class DescribedServer extends SpeakeasyBase {
    arn: string;
    certificate?: string;
    domain?: DomainEnum;
    endpointDetails?: EndpointDetails;
    endpointType?: EndpointTypeEnum;
    hostKeyFingerprint?: string;
    identityProviderDetails?: IdentityProviderDetails;
    identityProviderType?: IdentityProviderTypeEnum;
    loggingRole?: string;
    protocolDetails?: ProtocolDetails;
    protocols?: ProtocolEnum[];
    securityPolicyName?: string;
    serverId?: string;
    state?: StateEnum;
    tags?: Tag[];
    userCount?: number;
    workflowDetails?: WorkflowDetails;
}
