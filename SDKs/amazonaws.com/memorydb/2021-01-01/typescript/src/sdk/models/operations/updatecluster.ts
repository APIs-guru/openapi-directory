import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateClusterXAmzTargetEnum {
    AmazonMemoryDbUpdateCluster = "AmazonMemoryDB.UpdateCluster"
}


export class UpdateClusterHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: UpdateClusterXAmzTargetEnum;
}


export class UpdateClusterRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateClusterHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateClusterRequest;
}


export class UpdateClusterResponse extends SpeakeasyBase {
  @Metadata()
  aclNotFoundFault?: any;

  @Metadata()
  clusterNotFoundFault?: any;

  @Metadata()
  clusterQuotaForCustomerExceededFault?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidAclStateFault?: any;

  @Metadata()
  invalidClusterStateFault?: any;

  @Metadata()
  invalidKmsKeyFault?: any;

  @Metadata()
  invalidNodeStateFault?: any;

  @Metadata()
  invalidParameterCombinationException?: any;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  invalidVpcNetworkStateFault?: any;

  @Metadata()
  noOperationFault?: any;

  @Metadata()
  nodeQuotaForClusterExceededFault?: any;

  @Metadata()
  nodeQuotaForCustomerExceededFault?: any;

  @Metadata()
  parameterGroupNotFoundFault?: any;

  @Metadata()
  serviceLinkedRoleNotFoundFault?: any;

  @Metadata()
  shardsPerClusterQuotaExceededFault?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateClusterResponse?: shared.UpdateClusterResponse;
}
