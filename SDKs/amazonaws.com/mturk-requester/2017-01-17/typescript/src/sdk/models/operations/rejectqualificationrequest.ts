import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum RejectQualificationRequestXAmzTargetEnum {
    MTurkRequesterServiceV20170117RejectQualificationRequest = "MTurkRequesterServiceV20170117.RejectQualificationRequest"
}


export class RejectQualificationRequestHeaders extends SpeakeasyBase {
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
  xAmzTarget: RejectQualificationRequestXAmzTargetEnum;
}


export class RejectQualificationRequestRequest extends SpeakeasyBase {
  @Metadata()
  headers: RejectQualificationRequestHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RejectQualificationRequestRequest;
}


export class RejectQualificationRequestResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  rejectQualificationRequestResponse?: Map<string, any>;

  @Metadata()
  requestError?: any;

  @Metadata()
  serviceFault?: any;

  @Metadata()
  statusCode: number;
}
