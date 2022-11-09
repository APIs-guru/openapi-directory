import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DisconnectCustomKeyStoreXAmzTargetEnum {
    TrentServiceDisconnectCustomKeyStore = "TrentService.DisconnectCustomKeyStore"
}


export class DisconnectCustomKeyStoreHeaders extends SpeakeasyBase {
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
  xAmzTarget: DisconnectCustomKeyStoreXAmzTargetEnum;
}


export class DisconnectCustomKeyStoreRequest extends SpeakeasyBase {
  @Metadata()
  headers: DisconnectCustomKeyStoreHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DisconnectCustomKeyStoreRequest;
}


export class DisconnectCustomKeyStoreResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  customKeyStoreInvalidStateException?: any;

  @Metadata()
  customKeyStoreNotFoundException?: any;

  @Metadata()
  disconnectCustomKeyStoreResponse?: Map<string, any>;

  @Metadata()
  kmsInternalException?: any;

  @Metadata()
  statusCode: number;
}
