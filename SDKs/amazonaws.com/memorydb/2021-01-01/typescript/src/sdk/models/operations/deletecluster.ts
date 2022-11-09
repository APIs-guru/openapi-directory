import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteClusterXAmzTargetEnum {
    AmazonMemoryDbDeleteCluster = "AmazonMemoryDB.DeleteCluster"
}


export class DeleteClusterHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteClusterXAmzTargetEnum;
}


export class DeleteClusterRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteClusterHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteClusterRequest;
}


export class DeleteClusterResponse extends SpeakeasyBase {
  @Metadata()
  clusterNotFoundFault?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  deleteClusterResponse?: shared.DeleteClusterResponse;

  @Metadata()
  invalidClusterStateFault?: any;

  @Metadata()
  invalidParameterCombinationException?: any;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  serviceLinkedRoleNotFoundFault?: any;

  @Metadata()
  snapshotAlreadyExistsFault?: any;

  @Metadata()
  statusCode: number;
}
