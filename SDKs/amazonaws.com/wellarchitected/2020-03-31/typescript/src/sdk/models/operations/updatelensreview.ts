import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateLensReviewPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=LensAlias" })
  lensAlias: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=WorkloadId" })
  workloadId: string;
}


export class UpdateLensReviewHeaders extends SpeakeasyBase {
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
}


export class UpdateLensReviewRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=LensNotes" })
  lensNotes?: string;

  @Metadata({ data: "json, name=PillarNotes" })
  pillarNotes?: Map<string, string>;
}


export class UpdateLensReviewRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateLensReviewPathParams;

  @Metadata()
  headers: UpdateLensReviewHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateLensReviewRequestBody;
}


export class UpdateLensReviewResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  updateLensReviewOutput?: shared.UpdateLensReviewOutput;

  @Metadata()
  validationException?: any;
}
