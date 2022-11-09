import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateApplicationSnapshotXAmzTargetEnum {
    KinesisAnalytics20180523CreateApplicationSnapshot = "KinesisAnalytics_20180523.CreateApplicationSnapshot"
}


export class CreateApplicationSnapshotHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateApplicationSnapshotXAmzTargetEnum;
}


export class CreateApplicationSnapshotRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateApplicationSnapshotHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateApplicationSnapshotRequest;
}


export class CreateApplicationSnapshotResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createApplicationSnapshotResponse?: Map<string, any>;

  @Metadata()
  invalidApplicationConfigurationException?: any;

  @Metadata()
  invalidArgumentException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceInUseException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsupportedOperationException?: any;
}
