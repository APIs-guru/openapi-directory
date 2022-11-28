import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum PutLoggingConfigurationXAmzTargetEnum {
    AwswafRegional20161128PutLoggingConfiguration = "AWSWAF_Regional_20161128.PutLoggingConfiguration"
}


export class PutLoggingConfigurationHeaders extends SpeakeasyBase {
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
  xAmzTarget: PutLoggingConfigurationXAmzTargetEnum;
}


export class PutLoggingConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PutLoggingConfigurationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PutLoggingConfigurationRequest;
}


export class PutLoggingConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  putLoggingConfigurationResponse?: shared.PutLoggingConfigurationResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  wafInternalErrorException?: any;

  @SpeakeasyMetadata()
  wafNonexistentItemException?: any;

  @SpeakeasyMetadata()
  wafServiceLinkedRoleErrorException?: any;

  @SpeakeasyMetadata()
  wafStaleDataException?: any;
}
