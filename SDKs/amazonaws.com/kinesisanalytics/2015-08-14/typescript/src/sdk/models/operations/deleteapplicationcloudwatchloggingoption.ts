import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteApplicationCloudWatchLoggingOptionXAmzTargetEnum {
    KinesisAnalytics20150814DeleteApplicationCloudWatchLoggingOption = "KinesisAnalytics_20150814.DeleteApplicationCloudWatchLoggingOption"
}


export class DeleteApplicationCloudWatchLoggingOptionHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteApplicationCloudWatchLoggingOptionXAmzTargetEnum;
}


export class DeleteApplicationCloudWatchLoggingOptionRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteApplicationCloudWatchLoggingOptionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteApplicationCloudWatchLoggingOptionRequest;
}


export class DeleteApplicationCloudWatchLoggingOptionResponse extends SpeakeasyBase {
  @Metadata()
  concurrentModificationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  deleteApplicationCloudWatchLoggingOptionResponse?: Map<string, any>;

  @Metadata()
  invalidArgumentException?: any;

  @Metadata()
  resourceInUseException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsupportedOperationException?: any;
}
