import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ConnectCustomKeyStoreXAmzTargetEnum {
    TrentServiceConnectCustomKeyStore = "TrentService.ConnectCustomKeyStore"
}


export class ConnectCustomKeyStoreHeaders extends SpeakeasyBase {
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
  xAmzTarget: ConnectCustomKeyStoreXAmzTargetEnum;
}


export class ConnectCustomKeyStoreRequest extends SpeakeasyBase {
  @Metadata()
  headers: ConnectCustomKeyStoreHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ConnectCustomKeyStoreRequest;
}


export class ConnectCustomKeyStoreResponse extends SpeakeasyBase {
  @Metadata()
  cloudHsmClusterInvalidConfigurationException?: any;

  @Metadata()
  cloudHsmClusterNotActiveException?: any;

  @Metadata()
  connectCustomKeyStoreResponse?: Map<string, any>;

  @Metadata()
  contentType: string;

  @Metadata()
  customKeyStoreInvalidStateException?: any;

  @Metadata()
  customKeyStoreNotFoundException?: any;

  @Metadata()
  kmsInternalException?: any;

  @Metadata()
  statusCode: number;
}
