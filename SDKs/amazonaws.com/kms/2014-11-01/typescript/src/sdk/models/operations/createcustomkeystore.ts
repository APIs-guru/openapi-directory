import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreateCustomKeyStoreXAmzTargetEnum {
    TrentServiceCreateCustomKeyStore = "TrentService.CreateCustomKeyStore"
}


export class CreateCustomKeyStoreHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateCustomKeyStoreXAmzTargetEnum;
}


export class CreateCustomKeyStoreRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateCustomKeyStoreHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreateCustomKeyStoreRequest;
}


export class CreateCustomKeyStoreResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cloudHsmClusterInUseException?: any;

  @SpeakeasyMetadata()
  cloudHsmClusterInvalidConfigurationException?: any;

  @SpeakeasyMetadata()
  cloudHsmClusterNotActiveException?: any;

  @SpeakeasyMetadata()
  cloudHsmClusterNotFoundException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createCustomKeyStoreResponse?: shared.CreateCustomKeyStoreResponse;

  @SpeakeasyMetadata()
  customKeyStoreNameInUseException?: any;

  @SpeakeasyMetadata()
  incorrectTrustAnchorException?: any;

  @SpeakeasyMetadata()
  kmsInternalException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
