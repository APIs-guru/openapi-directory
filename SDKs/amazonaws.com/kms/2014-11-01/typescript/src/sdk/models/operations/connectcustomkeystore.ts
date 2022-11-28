import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ConnectCustomKeyStoreXAmzTargetEnum {
    TrentServiceConnectCustomKeyStore = "TrentService.ConnectCustomKeyStore"
}


export class ConnectCustomKeyStoreHeaders extends SpeakeasyBase {
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
  xAmzTarget: ConnectCustomKeyStoreXAmzTargetEnum;
}


export class ConnectCustomKeyStoreRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ConnectCustomKeyStoreHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ConnectCustomKeyStoreRequest;
}


export class ConnectCustomKeyStoreResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cloudHsmClusterInvalidConfigurationException?: any;

  @SpeakeasyMetadata()
  cloudHsmClusterNotActiveException?: any;

  @SpeakeasyMetadata()
  connectCustomKeyStoreResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  customKeyStoreInvalidStateException?: any;

  @SpeakeasyMetadata()
  customKeyStoreNotFoundException?: any;

  @SpeakeasyMetadata()
  kmsInternalException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
