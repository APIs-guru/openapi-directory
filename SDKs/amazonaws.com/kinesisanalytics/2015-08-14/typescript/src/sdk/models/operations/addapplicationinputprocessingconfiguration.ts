import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AddApplicationInputProcessingConfigurationXAmzTargetEnum {
    KinesisAnalytics20150814AddApplicationInputProcessingConfiguration = "KinesisAnalytics_20150814.AddApplicationInputProcessingConfiguration"
}


export class AddApplicationInputProcessingConfigurationHeaders extends SpeakeasyBase {
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
  xAmzTarget: AddApplicationInputProcessingConfigurationXAmzTargetEnum;
}


export class AddApplicationInputProcessingConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  headers: AddApplicationInputProcessingConfigurationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AddApplicationInputProcessingConfigurationRequest;
}


export class AddApplicationInputProcessingConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  addApplicationInputProcessingConfigurationResponse?: Map<string, any>;

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
