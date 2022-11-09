import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DisassociateResourceSharePermissionHeaders extends SpeakeasyBase {
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
}


export class DisassociateResourceSharePermissionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=permissionArn" })
  permissionArn: string;

  @Metadata({ data: "json, name=resourceShareArn" })
  resourceShareArn: string;
}


export class DisassociateResourceSharePermissionRequest extends SpeakeasyBase {
  @Metadata()
  headers: DisassociateResourceSharePermissionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: DisassociateResourceSharePermissionRequestBody;
}


export class DisassociateResourceSharePermissionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  disassociateResourceSharePermissionResponse?: shared.DisassociateResourceSharePermissionResponse;

  @Metadata()
  invalidClientTokenException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  invalidStateTransitionException?: any;

  @Metadata()
  malformedArnException?: any;

  @Metadata()
  operationNotPermittedException?: any;

  @Metadata()
  serverInternalException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unknownResourceException?: any;
}
