import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CancelKeyDeletionXAmzTargetEnum {
    TrentServiceCancelKeyDeletion = "TrentService.CancelKeyDeletion"
}


export class CancelKeyDeletionHeaders extends SpeakeasyBase {
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
  xAmzTarget: CancelKeyDeletionXAmzTargetEnum;
}


export class CancelKeyDeletionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CancelKeyDeletionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CancelKeyDeletionRequest;
}


export class CancelKeyDeletionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cancelKeyDeletionResponse?: shared.CancelKeyDeletionResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dependencyTimeoutException?: any;

  @SpeakeasyMetadata()
  invalidArnException?: any;

  @SpeakeasyMetadata()
  kmsInternalException?: any;

  @SpeakeasyMetadata()
  kmsInvalidStateException?: any;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
