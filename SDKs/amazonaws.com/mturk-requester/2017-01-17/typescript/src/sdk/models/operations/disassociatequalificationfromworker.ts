import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DisassociateQualificationFromWorkerXAmzTargetEnum {
    MTurkRequesterServiceV20170117DisassociateQualificationFromWorker = "MTurkRequesterServiceV20170117.DisassociateQualificationFromWorker"
}


export class DisassociateQualificationFromWorkerHeaders extends SpeakeasyBase {
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
  xAmzTarget: DisassociateQualificationFromWorkerXAmzTargetEnum;
}


export class DisassociateQualificationFromWorkerRequest extends SpeakeasyBase {
  @Metadata()
  headers: DisassociateQualificationFromWorkerHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DisassociateQualificationFromWorkerRequest;
}


export class DisassociateQualificationFromWorkerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  disassociateQualificationFromWorkerResponse?: Map<string, any>;

  @Metadata()
  requestError?: any;

  @Metadata()
  serviceFault?: any;

  @Metadata()
  statusCode: number;
}
