import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AssociateEntityToThingXAmzTargetEnum {
    IotThingsGraphFrontEndServiceAssociateEntityToThing = "IotThingsGraphFrontEndService.AssociateEntityToThing"
}


export class AssociateEntityToThingHeaders extends SpeakeasyBase {
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
  xAmzTarget: AssociateEntityToThingXAmzTargetEnum;
}


export class AssociateEntityToThingRequest extends SpeakeasyBase {
  @Metadata()
  headers: AssociateEntityToThingHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AssociateEntityToThingRequest;
}


export class AssociateEntityToThingResponse extends SpeakeasyBase {
  @Metadata()
  associateEntityToThingResponse?: Map<string, any>;

  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
