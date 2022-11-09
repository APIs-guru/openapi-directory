import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateStreamingSessionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=studioId" })
  studioId: string;
}


export class CreateStreamingSessionHeaders extends SpeakeasyBase {
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

export enum CreateStreamingSessionRequestBodyEc2InstanceTypeEnum {
    G4dnXlarge = "g4dn.xlarge"
,    G4dn2xlarge = "g4dn.2xlarge"
,    G4dn4xlarge = "g4dn.4xlarge"
,    G4dn8xlarge = "g4dn.8xlarge"
,    G4dn12xlarge = "g4dn.12xlarge"
,    G4dn16xlarge = "g4dn.16xlarge"
}


export class CreateStreamingSessionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ec2InstanceType" })
  ec2InstanceType?: CreateStreamingSessionRequestBodyEc2InstanceTypeEnum;

  @Metadata({ data: "json, name=launchProfileId" })
  launchProfileId?: string;

  @Metadata({ data: "json, name=ownedBy" })
  ownedBy?: string;

  @Metadata({ data: "json, name=streamingImageId" })
  streamingImageId?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateStreamingSessionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateStreamingSessionPathParams;

  @Metadata()
  headers: CreateStreamingSessionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateStreamingSessionRequestBody;
}


export class CreateStreamingSessionResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createStreamingSessionResponse?: shared.CreateStreamingSessionResponse;

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
