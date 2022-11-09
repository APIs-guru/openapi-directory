import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetLoggingConfigurationXAmzTargetEnum {
    Awswaf20150824GetLoggingConfiguration = "AWSWAF_20150824.GetLoggingConfiguration"
}


export class GetLoggingConfigurationHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetLoggingConfigurationXAmzTargetEnum;
}


export class GetLoggingConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetLoggingConfigurationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetLoggingConfigurationRequest;
}


export class GetLoggingConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getLoggingConfigurationResponse?: shared.GetLoggingConfigurationResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  wafInternalErrorException?: any;

  @Metadata()
  wafNonexistentItemException?: any;
}
