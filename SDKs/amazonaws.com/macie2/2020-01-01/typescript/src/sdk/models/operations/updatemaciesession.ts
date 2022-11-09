import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateMacieSessionHeaders extends SpeakeasyBase {
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

export enum UpdateMacieSessionRequestBodyFindingPublishingFrequencyEnum {
    FifteenMinutes = "FIFTEEN_MINUTES"
,    OneHour = "ONE_HOUR"
,    SixHours = "SIX_HOURS"
}

export enum UpdateMacieSessionRequestBodyStatusEnum {
    Paused = "PAUSED"
,    Enabled = "ENABLED"
}


export class UpdateMacieSessionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=findingPublishingFrequency" })
  findingPublishingFrequency?: UpdateMacieSessionRequestBodyFindingPublishingFrequencyEnum;

  @Metadata({ data: "json, name=status" })
  status?: UpdateMacieSessionRequestBodyStatusEnum;
}


export class UpdateMacieSessionRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateMacieSessionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateMacieSessionRequestBody;
}


export class UpdateMacieSessionResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceQuotaExceededException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  updateMacieSessionResponse?: Map<string, any>;

  @Metadata()
  validationException?: any;
}
