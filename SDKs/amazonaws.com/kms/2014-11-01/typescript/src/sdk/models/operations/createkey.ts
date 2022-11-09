import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateKeyXAmzTargetEnum {
    TrentServiceCreateKey = "TrentService.CreateKey"
}


export class CreateKeyHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateKeyXAmzTargetEnum;
}


export class CreateKeyRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateKeyHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateKeyRequest;
}


export class CreateKeyResponse extends SpeakeasyBase {
  @Metadata()
  cloudHsmClusterInvalidConfigurationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createKeyResponse?: shared.CreateKeyResponse;

  @Metadata()
  customKeyStoreInvalidStateException?: any;

  @Metadata()
  customKeyStoreNotFoundException?: any;

  @Metadata()
  dependencyTimeoutException?: any;

  @Metadata()
  invalidArnException?: any;

  @Metadata()
  kmsInternalException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  malformedPolicyDocumentException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tagException?: any;

  @Metadata()
  unsupportedOperationException?: any;
}
