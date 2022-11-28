import { SpeakeasyBase } from "../../../internal/utils";
import { DomainEnum } from "./domainenum";
import { EndpointTypeEnum } from "./endpointtypeenum";
import { IdentityProviderTypeEnum } from "./identityprovidertypeenum";
import { StateEnum } from "./stateenum";
/**
 * Returns properties of a file transfer protocol-enabled server that was specified.
**/
export declare class ListedServer extends SpeakeasyBase {
    arn: string;
    domain?: DomainEnum;
    endpointType?: EndpointTypeEnum;
    identityProviderType?: IdentityProviderTypeEnum;
    loggingRole?: string;
    serverId?: string;
    state?: StateEnum;
    userCount?: number;
}
