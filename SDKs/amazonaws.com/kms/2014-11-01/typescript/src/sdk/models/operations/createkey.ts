import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreateKeyXAmzTargetEnum {
    TrentServiceCreateKey = "TrentService.CreateKey"
}


export class CreateKeyHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateKeyXAmzTargetEnum;
}


export class CreateKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateKeyHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreateKeyRequest;
}


export class CreateKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cloudHsmClusterInvalidConfigurationException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createKeyResponse?: shared.CreateKeyResponse;

  @SpeakeasyMetadata()
  customKeyStoreInvalidStateException?: any;

  @SpeakeasyMetadata()
  customKeyStoreNotFoundException?: any;

  @SpeakeasyMetadata()
  dependencyTimeoutException?: any;

  @SpeakeasyMetadata()
  invalidArnException?: any;

  @SpeakeasyMetadata()
  kmsInternalException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  malformedPolicyDocumentException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tagException?: any;

  @SpeakeasyMetadata()
  unsupportedOperationException?: any;
}
