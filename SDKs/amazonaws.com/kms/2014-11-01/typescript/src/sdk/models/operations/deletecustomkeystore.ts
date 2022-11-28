import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum DeleteCustomKeyStoreXAmzTargetEnum {
    TrentServiceDeleteCustomKeyStore = "TrentService.DeleteCustomKeyStore"
}


export class DeleteCustomKeyStoreHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteCustomKeyStoreXAmzTargetEnum;
}


export class DeleteCustomKeyStoreRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: DeleteCustomKeyStoreHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DeleteCustomKeyStoreRequest;
}


export class DeleteCustomKeyStoreResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  customKeyStoreHasCmKsException?: any;

  @SpeakeasyMetadata()
  customKeyStoreInvalidStateException?: any;

  @SpeakeasyMetadata()
  customKeyStoreNotFoundException?: any;

  @SpeakeasyMetadata()
  deleteCustomKeyStoreResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  kmsInternalException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
