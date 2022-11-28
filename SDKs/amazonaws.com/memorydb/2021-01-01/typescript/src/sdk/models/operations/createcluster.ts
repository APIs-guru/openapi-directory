import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreateClusterXAmzTargetEnum {
    AmazonMemoryDbCreateCluster = "AmazonMemoryDB.CreateCluster"
}


export class CreateClusterHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: CreateClusterXAmzTargetEnum;
}


export class CreateClusterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateClusterHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreateClusterRequest;
}


export class CreateClusterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  aclNotFoundFault?: any;

  @SpeakeasyMetadata()
  clusterAlreadyExistsFault?: any;

  @SpeakeasyMetadata()
  clusterQuotaForCustomerExceededFault?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createClusterResponse?: shared.CreateClusterResponse;

  @SpeakeasyMetadata()
  insufficientClusterCapacityFault?: any;

  @SpeakeasyMetadata()
  invalidAclStateFault?: any;

  @SpeakeasyMetadata()
  invalidCredentialsException?: any;

  @SpeakeasyMetadata()
  invalidParameterCombinationException?: any;

  @SpeakeasyMetadata()
  invalidParameterValueException?: any;

  @SpeakeasyMetadata()
  invalidVpcNetworkStateFault?: any;

  @SpeakeasyMetadata()
  nodeQuotaForClusterExceededFault?: any;

  @SpeakeasyMetadata()
  nodeQuotaForCustomerExceededFault?: any;

  @SpeakeasyMetadata()
  parameterGroupNotFoundFault?: any;

  @SpeakeasyMetadata()
  serviceLinkedRoleNotFoundFault?: any;

  @SpeakeasyMetadata()
  shardsPerClusterQuotaExceededFault?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  subnetGroupNotFoundFault?: any;

  @SpeakeasyMetadata()
  tagQuotaPerResourceExceeded?: any;
}
