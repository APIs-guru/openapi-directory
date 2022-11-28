import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateStreamingSessionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=studioId" })
  studioId: string;
}


export class CreateStreamingSessionHeaders extends SpeakeasyBase {
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

export enum CreateStreamingSessionRequestBodyEc2InstanceTypeEnum {
    G4dnXlarge = "g4dn.xlarge",
    G4dn2xlarge = "g4dn.2xlarge",
    G4dn4xlarge = "g4dn.4xlarge",
    G4dn8xlarge = "g4dn.8xlarge",
    G4dn12xlarge = "g4dn.12xlarge",
    G4dn16xlarge = "g4dn.16xlarge"
}


export class CreateStreamingSessionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ec2InstanceType" })
  ec2InstanceType?: CreateStreamingSessionRequestBodyEc2InstanceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=launchProfileId" })
  launchProfileId?: string;

  @SpeakeasyMetadata({ data: "json, name=ownedBy" })
  ownedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=streamingImageId" })
  streamingImageId?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateStreamingSessionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateStreamingSessionPathParams;

  @SpeakeasyMetadata()
  headers: CreateStreamingSessionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateStreamingSessionRequestBody;
}


export class CreateStreamingSessionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createStreamingSessionResponse?: shared.CreateStreamingSessionResponse;

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
