import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ReplicateKeyXAmzTargetEnum {
    TrentServiceReplicateKey = "TrentService.ReplicateKey"
}


export class ReplicateKeyHeaders extends SpeakeasyBase {
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
  xAmzTarget: ReplicateKeyXAmzTargetEnum;
}


export class ReplicateKeyRequest extends SpeakeasyBase {
  @Metadata()
  headers: ReplicateKeyHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ReplicateKeyRequest;
}


export class ReplicateKeyResponse extends SpeakeasyBase {
  @Metadata()
  alreadyExistsException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  disabledException?: any;

  @Metadata()
  invalidArnException?: any;

  @Metadata()
  kmsInternalException?: any;

  @Metadata()
  kmsInvalidStateException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  malformedPolicyDocumentException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  replicateKeyResponse?: shared.ReplicateKeyResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  tagException?: any;

  @Metadata()
  unsupportedOperationException?: any;
}
