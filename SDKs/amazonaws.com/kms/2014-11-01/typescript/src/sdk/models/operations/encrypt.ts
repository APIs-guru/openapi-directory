import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum EncryptXAmzTargetEnum {
    TrentServiceEncrypt = "TrentService.Encrypt"
}


export class EncryptHeaders extends SpeakeasyBase {
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
  xAmzTarget: EncryptXAmzTargetEnum;
}


export class EncryptRequest extends SpeakeasyBase {
  @Metadata()
  headers: EncryptHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.EncryptRequest;
}


export class EncryptResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  dependencyTimeoutException?: any;

  @Metadata()
  disabledException?: any;

  @Metadata()
  encryptResponse?: shared.EncryptResponse;

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
