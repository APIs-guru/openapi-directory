import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCampaignDateRangeKpiPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application-id" })
  applicationId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=campaign-id" })
  campaignId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=kpi-name" })
  kpiName: string;
}


export class GetCampaignDateRangeKpiQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end-time" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next-token" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page-size" })
  pageSize?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start-time" })
  startTime?: Date;
}


export class GetCampaignDateRangeKpiHeaders extends SpeakeasyBase {
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


export class GetCampaignDateRangeKpiRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCampaignDateRangeKpiPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCampaignDateRangeKpiQueryParams;

  @SpeakeasyMetadata()
  headers: GetCampaignDateRangeKpiHeaders;
}


export class GetCampaignDateRangeKpiResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  forbiddenException?: any;

  @SpeakeasyMetadata()
  getCampaignDateRangeKpiResponse?: shared.GetCampaignDateRangeKpiResponse;

  @SpeakeasyMetadata()
  internalServerErrorException?: any;

  @SpeakeasyMetadata()
  methodNotAllowedException?: any;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  payloadTooLargeException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
