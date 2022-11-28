import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum UpdateCustomKeyStoreXAmzTargetEnum {
    TrentServiceUpdateCustomKeyStore = "TrentService.UpdateCustomKeyStore"
}


export class UpdateCustomKeyStoreHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateCustomKeyStoreXAmzTargetEnum;
}


export class UpdateCustomKeyStoreRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdateCustomKeyStoreHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.UpdateCustomKeyStoreRequest;
}


export class UpdateCustomKeyStoreResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cloudHsmClusterInvalidConfigurationException?: any;

  @SpeakeasyMetadata()
  cloudHsmClusterNotActiveException?: any;

  @SpeakeasyMetadata()
  cloudHsmClusterNotFoundException?: any;

  @SpeakeasyMetadata()
  cloudHsmClusterNotRelatedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  customKeyStoreInvalidStateException?: any;

  @SpeakeasyMetadata()
  customKeyStoreNameInUseException?: any;

  @SpeakeasyMetadata()
  customKeyStoreNotFoundException?: any;

  @SpeakeasyMetadata()
  kmsInternalException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateCustomKeyStoreResponse?: Map<string, any>;
}
