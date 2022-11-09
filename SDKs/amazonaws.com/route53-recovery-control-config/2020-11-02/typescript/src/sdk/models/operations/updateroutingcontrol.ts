import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateRoutingControlHeaders extends SpeakeasyBase {
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


export class UpdateRoutingControlRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=RoutingControlArn" })
  routingControlArn: string;

  @Metadata({ data: "json, name=RoutingControlName" })
  routingControlName: string;
}


export class UpdateRoutingControlRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateRoutingControlHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateRoutingControlRequestBody;
}


export class UpdateRoutingControlResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  updateRoutingControlResponse?: shared.UpdateRoutingControlResponse;

  @Metadata()
  validationException?: any;
}
