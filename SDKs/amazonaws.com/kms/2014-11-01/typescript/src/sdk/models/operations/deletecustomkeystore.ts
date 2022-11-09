import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteCustomKeyStoreXAmzTargetEnum {
    TrentServiceDeleteCustomKeyStore = "TrentService.DeleteCustomKeyStore"
}


export class DeleteCustomKeyStoreHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteCustomKeyStoreXAmzTargetEnum;
}


export class DeleteCustomKeyStoreRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteCustomKeyStoreHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteCustomKeyStoreRequest;
}


export class DeleteCustomKeyStoreResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  customKeyStoreHasCmKsException?: any;

  @Metadata()
  customKeyStoreInvalidStateException?: any;

  @Metadata()
  customKeyStoreNotFoundException?: any;

  @Metadata()
  deleteCustomKeyStoreResponse?: Map<string, any>;

  @Metadata()
  kmsInternalException?: any;

  @Metadata()
  statusCode: number;
}
