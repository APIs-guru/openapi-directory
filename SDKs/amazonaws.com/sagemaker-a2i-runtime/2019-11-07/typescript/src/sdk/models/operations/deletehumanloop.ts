import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteHumanLoopPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=HumanLoopName" })
  humanLoopName: string;
}


export class DeleteHumanLoopHeaders extends SpeakeasyBase {
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


export class DeleteHumanLoopRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteHumanLoopPathParams;

  @Metadata()
  headers: DeleteHumanLoopHeaders;
}


export class DeleteHumanLoopResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteHumanLoopResponse?: Map<string, any>;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
