import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum AddApplicationInputProcessingConfigurationXAmzTargetEnum {
    KinesisAnalytics20150814AddApplicationInputProcessingConfiguration = "KinesisAnalytics_20150814.AddApplicationInputProcessingConfiguration"
}


export class AddApplicationInputProcessingConfigurationHeaders extends SpeakeasyBase {
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
  xAmzTarget: AddApplicationInputProcessingConfigurationXAmzTargetEnum;
}


export class AddApplicationInputProcessingConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: AddApplicationInputProcessingConfigurationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AddApplicationInputProcessingConfigurationRequest;
}


export class AddApplicationInputProcessingConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  addApplicationInputProcessingConfigurationResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  concurrentModificationException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidArgumentException?: any;

  @SpeakeasyMetadata()
  resourceInUseException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unsupportedOperationException?: any;
}
