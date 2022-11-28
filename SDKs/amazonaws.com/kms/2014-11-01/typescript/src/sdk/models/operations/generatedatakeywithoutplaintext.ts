import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GenerateDataKeyWithoutPlaintextXAmzTargetEnum {
    TrentServiceGenerateDataKeyWithoutPlaintext = "TrentService.GenerateDataKeyWithoutPlaintext"
}


export class GenerateDataKeyWithoutPlaintextHeaders extends SpeakeasyBase {
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
  xAmzTarget: GenerateDataKeyWithoutPlaintextXAmzTargetEnum;
}


export class GenerateDataKeyWithoutPlaintextRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GenerateDataKeyWithoutPlaintextHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.GenerateDataKeyWithoutPlaintextRequest;
}


export class GenerateDataKeyWithoutPlaintextResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dependencyTimeoutException?: any;

  @SpeakeasyMetadata()
  disabledException?: any;

  @SpeakeasyMetadata()
  generateDataKeyWithoutPlaintextResponse?: shared.GenerateDataKeyWithoutPlaintextResponse;

  @SpeakeasyMetadata()
  invalidGrantTokenException?: any;

  @SpeakeasyMetadata()
  invalidKeyUsageException?: any;

  @SpeakeasyMetadata()
  kmsInternalException?: any;

  @SpeakeasyMetadata()
  kmsInvalidStateException?: any;

  @SpeakeasyMetadata()
  keyUnavailableException?: any;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
