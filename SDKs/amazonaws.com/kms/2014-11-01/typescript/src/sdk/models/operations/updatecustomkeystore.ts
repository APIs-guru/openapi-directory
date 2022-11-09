import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateCustomKeyStoreXAmzTargetEnum {
    TrentServiceUpdateCustomKeyStore = "TrentService.UpdateCustomKeyStore"
}


export class UpdateCustomKeyStoreHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateCustomKeyStoreXAmzTargetEnum;
}


export class UpdateCustomKeyStoreRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateCustomKeyStoreHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateCustomKeyStoreRequest;
}


export class UpdateCustomKeyStoreResponse extends SpeakeasyBase {
  @Metadata()
  cloudHsmClusterInvalidConfigurationException?: any;

  @Metadata()
  cloudHsmClusterNotActiveException?: any;

  @Metadata()
  cloudHsmClusterNotFoundException?: any;

  @Metadata()
  cloudHsmClusterNotRelatedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  customKeyStoreInvalidStateException?: any;

  @Metadata()
  customKeyStoreNameInUseException?: any;

  @Metadata()
  customKeyStoreNotFoundException?: any;

  @Metadata()
  kmsInternalException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateCustomKeyStoreResponse?: Map<string, any>;
}
