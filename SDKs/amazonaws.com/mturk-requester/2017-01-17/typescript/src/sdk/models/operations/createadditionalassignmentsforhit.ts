import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateAdditionalAssignmentsForHitxAmzTargetEnum {
    MTurkRequesterServiceV20170117CreateAdditionalAssignmentsForHit = "MTurkRequesterServiceV20170117.CreateAdditionalAssignmentsForHIT"
}


export class CreateAdditionalAssignmentsForHitHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateAdditionalAssignmentsForHitxAmzTargetEnum;
}


export class CreateAdditionalAssignmentsForHitRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateAdditionalAssignmentsForHitHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateAdditionalAssignmentsForHitRequest;
}


export class CreateAdditionalAssignmentsForHitResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createAdditionalAssignmentsForHitResponse?: Map<string, any>;

  @Metadata()
  requestError?: any;

  @Metadata()
  serviceFault?: any;

  @Metadata()
  statusCode: number;
}
