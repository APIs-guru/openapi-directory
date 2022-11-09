import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateCustomKeyStoreXAmzTargetEnum {
    TrentServiceCreateCustomKeyStore = "TrentService.CreateCustomKeyStore"
}


export class CreateCustomKeyStoreHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateCustomKeyStoreXAmzTargetEnum;
}


export class CreateCustomKeyStoreRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateCustomKeyStoreHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateCustomKeyStoreRequest;
}


export class CreateCustomKeyStoreResponse extends SpeakeasyBase {
  @Metadata()
  cloudHsmClusterInUseException?: any;

  @Metadata()
  cloudHsmClusterInvalidConfigurationException?: any;

  @Metadata()
  cloudHsmClusterNotActiveException?: any;

  @Metadata()
  cloudHsmClusterNotFoundException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createCustomKeyStoreResponse?: shared.CreateCustomKeyStoreResponse;

  @Metadata()
  customKeyStoreNameInUseException?: any;

  @Metadata()
  incorrectTrustAnchorException?: any;

  @Metadata()
  kmsInternalException?: any;

  @Metadata()
  statusCode: number;
}
