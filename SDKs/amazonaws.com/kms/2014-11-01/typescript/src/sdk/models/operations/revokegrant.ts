import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum RevokeGrantXAmzTargetEnum {
    TrentServiceRevokeGrant = "TrentService.RevokeGrant"
}


export class RevokeGrantHeaders extends SpeakeasyBase {
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
  xAmzTarget: RevokeGrantXAmzTargetEnum;
}


export class RevokeGrantRequest extends SpeakeasyBase {
  @Metadata()
  headers: RevokeGrantHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RevokeGrantRequest;
}


export class RevokeGrantResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  dependencyTimeoutException?: any;

  @Metadata()
  invalidArnException?: any;

  @Metadata()
  invalidGrantIdException?: any;

  @Metadata()
  kmsInternalException?: any;

  @Metadata()
  kmsInvalidStateException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;
}
