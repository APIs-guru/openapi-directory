import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum RejectAssignmentXAmzTargetEnum {
    MTurkRequesterServiceV20170117RejectAssignment = "MTurkRequesterServiceV20170117.RejectAssignment"
}


export class RejectAssignmentHeaders extends SpeakeasyBase {
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
  xAmzTarget: RejectAssignmentXAmzTargetEnum;
}


export class RejectAssignmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: RejectAssignmentHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.RejectAssignmentRequest;
}


export class RejectAssignmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  rejectAssignmentResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  requestError?: any;

  @SpeakeasyMetadata()
  serviceFault?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
