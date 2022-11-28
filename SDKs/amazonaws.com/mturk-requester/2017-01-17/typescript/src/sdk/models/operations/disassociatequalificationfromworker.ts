import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum DisassociateQualificationFromWorkerXAmzTargetEnum {
    MTurkRequesterServiceV20170117DisassociateQualificationFromWorker = "MTurkRequesterServiceV20170117.DisassociateQualificationFromWorker"
}


export class DisassociateQualificationFromWorkerHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: DisassociateQualificationFromWorkerXAmzTargetEnum;
}


export class DisassociateQualificationFromWorkerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: DisassociateQualificationFromWorkerHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DisassociateQualificationFromWorkerRequest;
}


export class DisassociateQualificationFromWorkerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  disassociateQualificationFromWorkerResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  requestError?: any;

  @SpeakeasyMetadata()
  serviceFault?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
