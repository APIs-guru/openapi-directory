import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DissociateEntityFromThingXAmzTargetEnum {
    IotThingsGraphFrontEndServiceDissociateEntityFromThing = "IotThingsGraphFrontEndService.DissociateEntityFromThing"
}


export class DissociateEntityFromThingHeaders extends SpeakeasyBase {
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
  xAmzTarget: DissociateEntityFromThingXAmzTargetEnum;
}


export class DissociateEntityFromThingRequest extends SpeakeasyBase {
  @Metadata()
  headers: DissociateEntityFromThingHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DissociateEntityFromThingRequest;
}


export class DissociateEntityFromThingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  dissociateEntityFromThingResponse?: Map<string, any>;

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
