import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AddApplicationCloudWatchLoggingOptionXAmzTargetEnum {
    KinesisAnalytics20150814AddApplicationCloudWatchLoggingOption = "KinesisAnalytics_20150814.AddApplicationCloudWatchLoggingOption"
}


export class AddApplicationCloudWatchLoggingOptionHeaders extends SpeakeasyBase {
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
  xAmzTarget: AddApplicationCloudWatchLoggingOptionXAmzTargetEnum;
}


export class AddApplicationCloudWatchLoggingOptionRequest extends SpeakeasyBase {
  @Metadata()
  headers: AddApplicationCloudWatchLoggingOptionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AddApplicationCloudWatchLoggingOptionRequest;
}


export class AddApplicationCloudWatchLoggingOptionResponse extends SpeakeasyBase {
  @Metadata()
  addApplicationCloudWatchLoggingOptionResponse?: Map<string, any>;

  @Metadata()
  concurrentModificationException?: any;

  @Metadata()
  contentType: string;

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
