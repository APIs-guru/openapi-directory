import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthorizationStatusEnum } from "./authorizationstatusenum";



// EndpointAuthorization
/** 
 * Describes an endpoint authorization for authorizing Redshift-managed VPC endpoint access to a cluster across Amazon Web Services accounts.
**/
export class EndpointAuthorization extends SpeakeasyBase {
  @SpeakeasyMetadata()
  allowedAllVpCs?: boolean;

  @SpeakeasyMetadata()
  allowedVpCs?: string[];

  @SpeakeasyMetadata()
  authorizeTime?: Date;

  @SpeakeasyMetadata()
  clusterIdentifier?: string;

  @SpeakeasyMetadata()
  clusterStatus?: string;

  @SpeakeasyMetadata()
  endpointCount?: number;

  @SpeakeasyMetadata()
  grantee?: string;

  @SpeakeasyMetadata()
  grantor?: string;

  @SpeakeasyMetadata()
  status?: AuthorizationStatusEnum;
}
