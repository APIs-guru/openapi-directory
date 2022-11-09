import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum VerifyXAmzTargetEnum {
    TrentServiceVerify = "TrentService.Verify"
}


export class VerifyHeaders extends SpeakeasyBase {
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
  xAmzTarget: VerifyXAmzTargetEnum;
}


export class VerifyRequest extends SpeakeasyBase {
  @Metadata()
  headers: VerifyHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.VerifyRequest;
}


export class VerifyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  dependencyTimeoutException?: any;

  @Metadata()
  disabledException?: any;

  @Metadata()
  invalidGrantTokenException?: any;

  @Metadata()
  invalidKeyUsageException?: any;

  @Metadata()
  kmsInternalException?: any;

  @Metadata()
  kmsInvalidSignatureException?: any;

  @Metadata()
  kmsInvalidStateException?: any;

  @Metadata()
  keyUnavailableException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  verifyResponse?: shared.VerifyResponse;
}
