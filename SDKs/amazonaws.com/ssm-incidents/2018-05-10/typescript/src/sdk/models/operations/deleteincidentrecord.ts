import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteIncidentRecordHeaders extends SpeakeasyBase {
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


export class DeleteIncidentRecordRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;
}


export class DeleteIncidentRecordRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteIncidentRecordHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: DeleteIncidentRecordRequestBody;
}


export class DeleteIncidentRecordResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  deleteIncidentRecordOutput?: Map<string, any>;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
