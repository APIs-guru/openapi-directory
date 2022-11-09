import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteApplicationInputProcessingConfigurationXAmzTargetEnum {
    KinesisAnalytics20150814DeleteApplicationInputProcessingConfiguration = "KinesisAnalytics_20150814.DeleteApplicationInputProcessingConfiguration"
}


export class DeleteApplicationInputProcessingConfigurationHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteApplicationInputProcessingConfigurationXAmzTargetEnum;
}


export class DeleteApplicationInputProcessingConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteApplicationInputProcessingConfigurationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteApplicationInputProcessingConfigurationRequest;
}


export class DeleteApplicationInputProcessingConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  concurrentModificationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  deleteApplicationInputProcessingConfigurationResponse?: Map<string, any>;

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
