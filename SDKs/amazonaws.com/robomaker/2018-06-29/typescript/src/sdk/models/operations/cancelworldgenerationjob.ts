import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CancelWorldGenerationJobHeaders extends SpeakeasyBase {
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


export class CancelWorldGenerationJobRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=job" })
  job: string;
}


export class CancelWorldGenerationJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CancelWorldGenerationJobHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CancelWorldGenerationJobRequestBody;
}


export class CancelWorldGenerationJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cancelWorldGenerationJobResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  invalidParameterException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;
}
