import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GenerateDataKeyPairWithoutPlaintextXAmzTargetEnum {
    TrentServiceGenerateDataKeyPairWithoutPlaintext = "TrentService.GenerateDataKeyPairWithoutPlaintext"
}


export class GenerateDataKeyPairWithoutPlaintextHeaders extends SpeakeasyBase {
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
  xAmzTarget: GenerateDataKeyPairWithoutPlaintextXAmzTargetEnum;
}


export class GenerateDataKeyPairWithoutPlaintextRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GenerateDataKeyPairWithoutPlaintextHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.GenerateDataKeyPairWithoutPlaintextRequest;
}


export class GenerateDataKeyPairWithoutPlaintextResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dependencyTimeoutException?: any;

  @SpeakeasyMetadata()
  disabledException?: any;

  @SpeakeasyMetadata()
  generateDataKeyPairWithoutPlaintextResponse?: shared.GenerateDataKeyPairWithoutPlaintextResponse;

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

  @SpeakeasyMetadata()
  unsupportedOperationException?: any;
}
