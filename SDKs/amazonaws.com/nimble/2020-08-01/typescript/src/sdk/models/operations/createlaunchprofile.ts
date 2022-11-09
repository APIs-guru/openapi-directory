import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateLaunchProfilePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=studioId" })
  studioId: string;
}


export class CreateLaunchProfileHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Client-Token" })
  xAmzClientToken?: string;

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


export class CreateLaunchProfileRequestBodyStreamConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=clipboardMode" })
  clipboardMode?: shared.StreamingClipboardModeEnum;

  @Metadata({ data: "json, name=ec2InstanceTypes" })
  ec2InstanceTypes?: shared.StreamingInstanceTypeEnum[];

  @Metadata({ data: "json, name=maxSessionLengthInMinutes" })
  maxSessionLengthInMinutes?: number;

  @Metadata({ data: "json, name=streamingImageIds" })
  streamingImageIds?: string[];
}


export class CreateLaunchProfileRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=ec2SubnetIds" })
  ec2SubnetIds: string[];

  @Metadata({ data: "json, name=launchProfileProtocolVersions" })
  launchProfileProtocolVersions: string[];

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=streamConfiguration" })
  streamConfiguration: CreateLaunchProfileRequestBodyStreamConfiguration;

  @Metadata({ data: "json, name=studioComponentIds" })
  studioComponentIds: string[];

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateLaunchProfileRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateLaunchProfilePathParams;

  @Metadata()
  headers: CreateLaunchProfileHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateLaunchProfileRequestBody;
}


export class CreateLaunchProfileResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createLaunchProfileResponse?: shared.CreateLaunchProfileResponse;

  @Metadata()
  internalServerErrorException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceQuotaExceededException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
