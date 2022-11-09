import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutDeliverabilityDashboardOptionHeaders extends SpeakeasyBase {
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


export class PutDeliverabilityDashboardOptionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=DashboardEnabled" })
  dashboardEnabled: boolean;

  @Metadata({ data: "json, name=SubscribedDomains", elemType: shared.DomainDeliverabilityTrackingOption })
  subscribedDomains?: shared.DomainDeliverabilityTrackingOption[];
}


export class PutDeliverabilityDashboardOptionRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutDeliverabilityDashboardOptionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutDeliverabilityDashboardOptionRequestBody;
}


export class PutDeliverabilityDashboardOptionResponse extends SpeakeasyBase {
  @Metadata()
  alreadyExistsException?: any;

  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  putDeliverabilityDashboardOptionResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
