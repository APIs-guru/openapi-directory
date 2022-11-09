import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CancelWorldExportJobHeaders extends SpeakeasyBase {
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


export class CancelWorldExportJobRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=job" })
  job: string;
}


export class CancelWorldExportJobRequest extends SpeakeasyBase {
  @Metadata()
  headers: CancelWorldExportJobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CancelWorldExportJobRequestBody;
}


export class CancelWorldExportJobResponse extends SpeakeasyBase {
  @Metadata()
  cancelWorldExportJobResponse?: Map<string, any>;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
