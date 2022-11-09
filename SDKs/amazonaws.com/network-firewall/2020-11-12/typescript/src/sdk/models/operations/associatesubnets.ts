import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AssociateSubnetsXAmzTargetEnum {
    NetworkFirewall20201112AssociateSubnets = "NetworkFirewall_20201112.AssociateSubnets"
}


export class AssociateSubnetsHeaders extends SpeakeasyBase {
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
  xAmzTarget: AssociateSubnetsXAmzTargetEnum;
}


export class AssociateSubnetsRequest extends SpeakeasyBase {
  @Metadata()
  headers: AssociateSubnetsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AssociateSubnetsRequest;
}


export class AssociateSubnetsResponse extends SpeakeasyBase {
  @Metadata()
  associateSubnetsResponse?: shared.AssociateSubnetsResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  insufficientCapacityException?: any;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidOperationException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  invalidTokenException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
