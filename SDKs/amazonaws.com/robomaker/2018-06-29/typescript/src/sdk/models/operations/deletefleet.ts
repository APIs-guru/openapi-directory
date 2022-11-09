import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteFleetHeaders extends SpeakeasyBase {
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


export class DeleteFleetRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=fleet" })
  fleet: string;
}


export class DeleteFleetRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteFleetHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: DeleteFleetRequestBody;
}


export class DeleteFleetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteFleetResponse?: Map<string, any>;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
