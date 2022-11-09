import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EnableMacieHeaders extends SpeakeasyBase {
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

export enum EnableMacieRequestBodyFindingPublishingFrequencyEnum {
    FifteenMinutes = "FIFTEEN_MINUTES"
,    OneHour = "ONE_HOUR"
,    SixHours = "SIX_HOURS"
}

export enum EnableMacieRequestBodyStatusEnum {
    Paused = "PAUSED"
,    Enabled = "ENABLED"
}


export class EnableMacieRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=findingPublishingFrequency" })
  findingPublishingFrequency?: EnableMacieRequestBodyFindingPublishingFrequencyEnum;

  @Metadata({ data: "json, name=status" })
  status?: EnableMacieRequestBodyStatusEnum;
}


export class EnableMacieRequest extends SpeakeasyBase {
  @Metadata()
  headers: EnableMacieHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: EnableMacieRequestBody;
}


export class EnableMacieResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  enableMacieResponse?: Map<string, any>;

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
  validationException?: any;
}
