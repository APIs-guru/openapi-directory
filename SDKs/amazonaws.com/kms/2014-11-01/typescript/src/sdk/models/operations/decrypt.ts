import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DecryptXAmzTargetEnum {
    TrentServiceDecrypt = "TrentService.Decrypt"
}


export class DecryptHeaders extends SpeakeasyBase {
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
  xAmzTarget: DecryptXAmzTargetEnum;
}


export class DecryptRequest extends SpeakeasyBase {
  @Metadata()
  headers: DecryptHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DecryptRequest;
}


export class DecryptResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  decryptResponse?: shared.DecryptResponse;

  @Metadata()
  dependencyTimeoutException?: any;

  @Metadata()
  disabledException?: any;

  @Metadata()
  incorrectKeyException?: any;

  @Metadata()
  invalidCiphertextException?: any;

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
