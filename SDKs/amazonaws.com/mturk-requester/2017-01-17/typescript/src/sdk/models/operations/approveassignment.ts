import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ApproveAssignmentXAmzTargetEnum {
    MTurkRequesterServiceV20170117ApproveAssignment = "MTurkRequesterServiceV20170117.ApproveAssignment"
}


export class ApproveAssignmentHeaders extends SpeakeasyBase {
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
  xAmzTarget: ApproveAssignmentXAmzTargetEnum;
}


export class ApproveAssignmentRequest extends SpeakeasyBase {
  @Metadata()
  headers: ApproveAssignmentHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ApproveAssignmentRequest;
}


export class ApproveAssignmentResponse extends SpeakeasyBase {
  @Metadata()
  approveAssignmentResponse?: Map<string, any>;

  @Metadata()
  contentType: string;

  @Metadata()
  requestError?: any;

  @Metadata()
  serviceFault?: any;

  @Metadata()
  statusCode: number;
}
