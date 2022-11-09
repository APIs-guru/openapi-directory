import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GenerateDataKeyXAmzTargetEnum {
    TrentServiceGenerateDataKey = "TrentService.GenerateDataKey"
}


export class GenerateDataKeyHeaders extends SpeakeasyBase {
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
  xAmzTarget: GenerateDataKeyXAmzTargetEnum;
}


export class GenerateDataKeyRequest extends SpeakeasyBase {
  @Metadata()
  headers: GenerateDataKeyHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GenerateDataKeyRequest;
}


export class GenerateDataKeyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  dependencyTimeoutException?: any;

  @Metadata()
  disabledException?: any;

  @Metadata()
  generateDataKeyResponse?: shared.GenerateDataKeyResponse;

  @Metadata()
  invalidGrantTokenException?: any;

  @Metadata()
  invalidKeyUsageException?: any;

  @Metadata()
  kmsInternalException?: any;

  @Metadata()
  kmsInvalidStateException?: any;

  @Metadata()
  keyUnavailableException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;
}
