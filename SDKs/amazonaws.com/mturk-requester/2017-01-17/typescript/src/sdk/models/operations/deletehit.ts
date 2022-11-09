import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteHitxAmzTargetEnum {
    MTurkRequesterServiceV20170117DeleteHit = "MTurkRequesterServiceV20170117.DeleteHIT"
}


export class DeleteHitHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteHitxAmzTargetEnum;
}


export class DeleteHitRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteHitHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteHitRequest;
}


export class DeleteHitResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteHitResponse?: Map<string, any>;

  @Metadata()
  requestError?: any;

  @Metadata()
  serviceFault?: any;

  @Metadata()
  statusCode: number;
}
