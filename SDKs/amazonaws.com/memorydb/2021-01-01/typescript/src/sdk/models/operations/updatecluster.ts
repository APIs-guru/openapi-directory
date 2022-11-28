import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum UpdateClusterXAmzTargetEnum {
    AmazonMemoryDbUpdateCluster = "AmazonMemoryDB.UpdateCluster"
}


export class UpdateClusterHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateClusterXAmzTargetEnum;
}


export class UpdateClusterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdateClusterHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.UpdateClusterRequest;
}


export class UpdateClusterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  aclNotFoundFault?: any;

  @SpeakeasyMetadata()
  clusterNotFoundFault?: any;

  @SpeakeasyMetadata()
  clusterQuotaForCustomerExceededFault?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidAclStateFault?: any;

  @SpeakeasyMetadata()
  invalidClusterStateFault?: any;

  @SpeakeasyMetadata()
  invalidKmsKeyFault?: any;

  @SpeakeasyMetadata()
  invalidNodeStateFault?: any;

  @SpeakeasyMetadata()
  invalidParameterCombinationException?: any;

  @SpeakeasyMetadata()
  invalidParameterValueException?: any;

  @SpeakeasyMetadata()
  invalidVpcNetworkStateFault?: any;

  @SpeakeasyMetadata()
  noOperationFault?: any;

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
  updateClusterResponse?: shared.UpdateClusterResponse;
}
