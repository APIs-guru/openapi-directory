import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateLaunchProfilePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=studioId" })
  studioId: string;
}


export class CreateLaunchProfileHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Client-Token" })
  xAmzClientToken?: string;

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


export class CreateLaunchProfileRequestBodyStreamConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clipboardMode" })
  clipboardMode?: shared.StreamingClipboardModeEnum;

  @SpeakeasyMetadata({ data: "json, name=ec2InstanceTypes" })
  ec2InstanceTypes?: shared.StreamingInstanceTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=maxSessionLengthInMinutes" })
  maxSessionLengthInMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=streamingImageIds" })
  streamingImageIds?: string[];
}


export class CreateLaunchProfileRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=ec2SubnetIds" })
  ec2SubnetIds: string[];

  @SpeakeasyMetadata({ data: "json, name=launchProfileProtocolVersions" })
  launchProfileProtocolVersions: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=streamConfiguration" })
  streamConfiguration: CreateLaunchProfileRequestBodyStreamConfiguration;

  @SpeakeasyMetadata({ data: "json, name=studioComponentIds" })
  studioComponentIds: string[];

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateLaunchProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateLaunchProfilePathParams;

  @SpeakeasyMetadata()
  headers: CreateLaunchProfileHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateLaunchProfileRequestBody;
}


export class CreateLaunchProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createLaunchProfileResponse?: shared.CreateLaunchProfileResponse;

  @SpeakeasyMetadata()
  internalServerErrorException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceQuotaExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
