import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeApplicationSnapshotXAmzTargetEnum {
    KinesisAnalytics20180523DescribeApplicationSnapshot = "KinesisAnalytics_20180523.DescribeApplicationSnapshot"
}


export class DescribeApplicationSnapshotHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeApplicationSnapshotXAmzTargetEnum;
}


export class DescribeApplicationSnapshotRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeApplicationSnapshotHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeApplicationSnapshotRequest;
}


export class DescribeApplicationSnapshotResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeApplicationSnapshotResponse?: shared.DescribeApplicationSnapshotResponse;

  @Metadata()
  invalidArgumentException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsupportedOperationException?: any;
}
