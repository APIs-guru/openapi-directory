import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteJobHeaders extends SpeakeasyBase {
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


export class DeleteJobRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jobID" })
  jobId: string;
}


export class DeleteJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: DeleteJobHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: DeleteJobRequestBody;
}


export class DeleteJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteJobResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  uninitializedAccountException?: any;
}
