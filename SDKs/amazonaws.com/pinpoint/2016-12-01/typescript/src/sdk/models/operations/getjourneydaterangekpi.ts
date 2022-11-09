import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetJourneyDateRangeKpiPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=application-id" })
  applicationId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=journey-id" })
  journeyId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=kpi-name" })
  kpiName: string;
}


export class GetJourneyDateRangeKpiQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=end-time" })
  endTime?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=next-token" })
  nextToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page-size" })
  pageSize?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start-time" })
  startTime?: Date;
}


export class GetJourneyDateRangeKpiHeaders extends SpeakeasyBase {
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


export class GetJourneyDateRangeKpiRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetJourneyDateRangeKpiPathParams;

  @Metadata()
  queryParams: GetJourneyDateRangeKpiQueryParams;

  @Metadata()
  headers: GetJourneyDateRangeKpiHeaders;
}


export class GetJourneyDateRangeKpiResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  forbiddenException?: any;

  @Metadata()
  getJourneyDateRangeKpiResponse?: shared.GetJourneyDateRangeKpiResponse;

  @Metadata()
  internalServerErrorException?: any;

  @Metadata()
  methodNotAllowedException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  payloadTooLargeException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
