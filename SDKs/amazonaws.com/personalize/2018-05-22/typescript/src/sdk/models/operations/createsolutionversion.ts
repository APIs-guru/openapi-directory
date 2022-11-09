import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateSolutionVersionXAmzTargetEnum {
    AmazonPersonalizeCreateSolutionVersion = "AmazonPersonalize.CreateSolutionVersion"
}


export class CreateSolutionVersionHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: CreateSolutionVersionXAmzTargetEnum;
}


export class CreateSolutionVersionRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateSolutionVersionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateSolutionVersionRequest;
}


export class CreateSolutionVersionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createSolutionVersionResponse?: shared.CreateSolutionVersionResponse;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceInUseException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
