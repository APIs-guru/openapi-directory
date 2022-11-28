import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum DeleteApplicationCloudWatchLoggingOptionXAmzTargetEnum {
    KinesisAnalytics20180523DeleteApplicationCloudWatchLoggingOption = "KinesisAnalytics_20180523.DeleteApplicationCloudWatchLoggingOption"
}


export class DeleteApplicationCloudWatchLoggingOptionHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteApplicationCloudWatchLoggingOptionXAmzTargetEnum;
}


export class DeleteApplicationCloudWatchLoggingOptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: DeleteApplicationCloudWatchLoggingOptionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DeleteApplicationCloudWatchLoggingOptionRequest;
}


export class DeleteApplicationCloudWatchLoggingOptionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  concurrentModificationException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteApplicationCloudWatchLoggingOptionResponse?: shared.DeleteApplicationCloudWatchLoggingOptionResponse;

  @SpeakeasyMetadata()
  invalidApplicationConfigurationException?: any;

  @SpeakeasyMetadata()
  invalidArgumentException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  resourceInUseException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
