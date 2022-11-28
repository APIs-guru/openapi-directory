import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpgradeLensReviewPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=LensAlias" })
  lensAlias: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=WorkloadId" })
  workloadId: string;
}


export class UpgradeLensReviewHeaders extends SpeakeasyBase {
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
}


export class UpgradeLensReviewRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=MilestoneName" })
  milestoneName: string;
}


export class UpgradeLensReviewRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpgradeLensReviewPathParams;

  @SpeakeasyMetadata()
  headers: UpgradeLensReviewHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpgradeLensReviewRequestBody;
}


export class UpgradeLensReviewResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
