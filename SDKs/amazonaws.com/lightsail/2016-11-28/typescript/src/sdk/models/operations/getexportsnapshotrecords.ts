import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetExportSnapshotRecordsXAmzTargetEnum {
    Lightsail20161128GetExportSnapshotRecords = "Lightsail_20161128.GetExportSnapshotRecords"
}


export class GetExportSnapshotRecordsHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetExportSnapshotRecordsXAmzTargetEnum;
}


export class GetExportSnapshotRecordsRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetExportSnapshotRecordsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetExportSnapshotRecordsRequest;
}


export class GetExportSnapshotRecordsResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  accountSetupInProgressException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  getExportSnapshotRecordsResult?: shared.GetExportSnapshotRecordsResult;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  operationFailureException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unauthenticatedException?: any;
}
