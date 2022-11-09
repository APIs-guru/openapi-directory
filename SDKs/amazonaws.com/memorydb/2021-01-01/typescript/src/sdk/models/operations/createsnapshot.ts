import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateSnapshotXAmzTargetEnum {
    AmazonMemoryDbCreateSnapshot = "AmazonMemoryDB.CreateSnapshot"
}


export class CreateSnapshotHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateSnapshotXAmzTargetEnum;
}


export class CreateSnapshotRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateSnapshotHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateSnapshotRequest;
}


export class CreateSnapshotResponse extends SpeakeasyBase {
  @Metadata()
  clusterNotFoundFault?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createSnapshotResponse?: shared.CreateSnapshotResponse;

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
  snapshotQuotaExceededFault?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tagQuotaPerResourceExceeded?: any;
}
