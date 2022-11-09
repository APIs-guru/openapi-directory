import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateProjectHeaders extends SpeakeasyBase {
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


export class CreateProjectRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=portalId" })
  portalId: string;

  @Metadata({ data: "json, name=projectDescription" })
  projectDescription?: string;

  @Metadata({ data: "json, name=projectName" })
  projectName: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateProjectRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateProjectHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateProjectRequestBody;
}


export class CreateProjectResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createProjectResponse?: shared.CreateProjectResponse;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
