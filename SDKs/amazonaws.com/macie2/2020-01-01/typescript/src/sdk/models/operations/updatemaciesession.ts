import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateMacieSessionHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

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

export enum UpdateMacieSessionRequestBodyFindingPublishingFrequencyEnum {
    FifteenMinutes = "FIFTEEN_MINUTES",
    OneHour = "ONE_HOUR",
    SixHours = "SIX_HOURS"
}

export enum UpdateMacieSessionRequestBodyStatusEnum {
    Paused = "PAUSED",
    Enabled = "ENABLED"
}


export class UpdateMacieSessionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=findingPublishingFrequency" })
  findingPublishingFrequency?: UpdateMacieSessionRequestBodyFindingPublishingFrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: UpdateMacieSessionRequestBodyStatusEnum;
}


export class UpdateMacieSessionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdateMacieSessionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateMacieSessionRequestBody;
}


export class UpdateMacieSessionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceQuotaExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  updateMacieSessionResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  validationException?: any;
}
