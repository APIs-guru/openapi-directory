import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateRobotHeaders extends SpeakeasyBase {
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

export enum CreateRobotRequestBodyArchitectureEnum {
    X8664 = "X86_64"
,    Arm64 = "ARM64"
,    Armhf = "ARMHF"
}


export class CreateRobotRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=architecture" })
  architecture: CreateRobotRequestBodyArchitectureEnum;

  @Metadata({ data: "json, name=greengrassGroupId" })
  greengrassGroupId: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateRobotRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateRobotHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateRobotRequestBody;
}


export class CreateRobotResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createRobotResponse?: shared.CreateRobotResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceAlreadyExistsException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
