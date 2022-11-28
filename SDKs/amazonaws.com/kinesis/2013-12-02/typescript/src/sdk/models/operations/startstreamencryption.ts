import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum StartStreamEncryptionXAmzTargetEnum {
    Kinesis20131202StartStreamEncryption = "Kinesis_20131202.StartStreamEncryption"
}


export class StartStreamEncryptionHeaders extends SpeakeasyBase {
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
  xAmzTarget: StartStreamEncryptionXAmzTargetEnum;
}


export class StartStreamEncryptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: StartStreamEncryptionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.StartStreamEncryptionInput;
}


export class StartStreamEncryptionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidArgumentException?: any;

  @SpeakeasyMetadata()
  kmsAccessDeniedException?: any;

  @SpeakeasyMetadata()
  kmsDisabledException?: any;

  @SpeakeasyMetadata()
  kmsInvalidStateException?: any;

  @SpeakeasyMetadata()
  kmsNotFoundException?: any;

  @SpeakeasyMetadata()
  kmsOptInRequired?: any;

  @SpeakeasyMetadata()
  kmsThrottlingException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  resourceInUseException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
