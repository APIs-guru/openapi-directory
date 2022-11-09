import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CopySnapshotXAmzTargetEnum {
    AmazonMemoryDbCopySnapshot = "AmazonMemoryDB.CopySnapshot"
}


export class CopySnapshotHeaders extends SpeakeasyBase {
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
  xAmzTarget: CopySnapshotXAmzTargetEnum;
}


export class CopySnapshotRequest extends SpeakeasyBase {
  @Metadata()
  headers: CopySnapshotHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CopySnapshotRequest;
}


export class CopySnapshotResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  copySnapshotResponse?: shared.CopySnapshotResponse;

  @Metadata()
  invalidParameterCombinationException?: any;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  invalidSnapshotStateFault?: any;

  @Metadata()
  serviceLinkedRoleNotFoundFault?: any;

  @Metadata()
  snapshotAlreadyExistsFault?: any;

  @Metadata()
  snapshotNotFoundFault?: any;

  @Metadata()
  snapshotQuotaExceededFault?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tagQuotaPerResourceExceeded?: any;
}
