import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EnableMacieHeaders extends SpeakeasyBase {
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

export enum EnableMacieRequestBodyFindingPublishingFrequencyEnum {
    FifteenMinutes = "FIFTEEN_MINUTES",
    OneHour = "ONE_HOUR",
    SixHours = "SIX_HOURS"
}

export enum EnableMacieRequestBodyStatusEnum {
    Paused = "PAUSED",
    Enabled = "ENABLED"
}


export class EnableMacieRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "json, name=findingPublishingFrequency" })
  findingPublishingFrequency?: EnableMacieRequestBodyFindingPublishingFrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: EnableMacieRequestBodyStatusEnum;
}


export class EnableMacieRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: EnableMacieHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: EnableMacieRequestBody;
}


export class EnableMacieResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  enableMacieResponse?: Map<string, any>;

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
  validationException?: any;
}
