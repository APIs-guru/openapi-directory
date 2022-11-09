import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteLoggingConfigurationXAmzTargetEnum {
    Awswaf20150824DeleteLoggingConfiguration = "AWSWAF_20150824.DeleteLoggingConfiguration"
}


export class DeleteLoggingConfigurationHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteLoggingConfigurationXAmzTargetEnum;
}


export class DeleteLoggingConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteLoggingConfigurationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteLoggingConfigurationRequest;
}


export class DeleteLoggingConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteLoggingConfigurationResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;

  @Metadata()
  wafInternalErrorException?: any;

  @Metadata()
  wafNonexistentItemException?: any;

  @Metadata()
  wafStaleDataException?: any;
}
