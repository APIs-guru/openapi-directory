import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PutLoggingConfigurationXAmzTargetEnum {
    AwswafRegional20161128PutLoggingConfiguration = "AWSWAF_Regional_20161128.PutLoggingConfiguration"
}


export class PutLoggingConfigurationHeaders extends SpeakeasyBase {
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
  xAmzTarget: PutLoggingConfigurationXAmzTargetEnum;
}


export class PutLoggingConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutLoggingConfigurationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PutLoggingConfigurationRequest;
}


export class PutLoggingConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  putLoggingConfigurationResponse?: shared.PutLoggingConfigurationResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  wafInternalErrorException?: any;

  @Metadata()
  wafNonexistentItemException?: any;

  @Metadata()
  wafServiceLinkedRoleErrorException?: any;

  @Metadata()
  wafStaleDataException?: any;
}
