import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteRobotHeaders extends SpeakeasyBase {
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


export class DeleteRobotRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=robot" })
  robot: string;
}


export class DeleteRobotRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteRobotHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: DeleteRobotRequestBody;
}


export class DeleteRobotResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteRobotResponse?: Map<string, any>;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
