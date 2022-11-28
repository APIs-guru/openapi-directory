import { SpeakeasyBase } from "../../../internal/utils";
import { DomainEnum } from "./domainenum";
import { EndpointDetails } from "./endpointdetails";
import { EndpointTypeEnum } from "./endpointtypeenum";
import { IdentityProviderDetails } from "./identityproviderdetails";
import { IdentityProviderTypeEnum } from "./identityprovidertypeenum";
import { ProtocolEnum } from "./protocolenum";
import { Tag } from "./tag";
import { WorkflowDetails } from "./workflowdetails";
export declare class CreateServerRequest extends SpeakeasyBase {
    certificate?: string;
    domain?: DomainEnum;
    endpointDetails?: EndpointDetails;
    endpointType?: EndpointTypeEnum;
    hostKey?: string;
    identityProviderDetails?: IdentityProviderDetails;
    identityProviderType?: IdentityProviderTypeEnum;
    loggingRole?: string;
    protocols?: ProtocolEnum[];
    securityPolicyName?: string;
    tags?: Tag[];
    workflowDetails?: WorkflowDetails;
}
