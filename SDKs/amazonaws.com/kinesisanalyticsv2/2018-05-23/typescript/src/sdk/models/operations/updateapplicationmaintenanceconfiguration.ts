import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateApplicationMaintenanceConfigurationXAmzTargetEnum {
    KinesisAnalytics20180523UpdateApplicationMaintenanceConfiguration = "KinesisAnalytics_20180523.UpdateApplicationMaintenanceConfiguration"
}


export class UpdateApplicationMaintenanceConfigurationHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateApplicationMaintenanceConfigurationXAmzTargetEnum;
}


export class UpdateApplicationMaintenanceConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateApplicationMaintenanceConfigurationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateApplicationMaintenanceConfigurationRequest;
}


export class UpdateApplicationMaintenanceConfigurationResponse extends SpeakeasyBase {
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

  @Metadata()
  updateApplicationMaintenanceConfigurationResponse?: shared.UpdateApplicationMaintenanceConfigurationResponse;
}
