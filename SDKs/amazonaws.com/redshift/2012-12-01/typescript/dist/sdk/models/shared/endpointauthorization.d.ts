import { SpeakeasyBase } from "../../../internal/utils";
import { AuthorizationStatusEnum } from "./authorizationstatusenum";
/**
 * Describes an endpoint authorization for authorizing Redshift-managed VPC endpoint access to a cluster across Amazon Web Services accounts.
**/
export declare class EndpointAuthorization extends SpeakeasyBase {
    allowedAllVpCs?: boolean;
    allowedVpCs?: string[];
    authorizeTime?: Date;
    clusterIdentifier?: string;
    clusterStatus?: string;
    endpointCount?: number;
    grantee?: string;
    grantor?: string;
    status?: AuthorizationStatusEnum;
}
