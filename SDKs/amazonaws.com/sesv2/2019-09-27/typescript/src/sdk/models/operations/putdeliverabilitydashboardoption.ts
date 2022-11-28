import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutDeliverabilityDashboardOptionHeaders extends SpeakeasyBase {
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


export class PutDeliverabilityDashboardOptionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DashboardEnabled" })
  dashboardEnabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=SubscribedDomains", elemType: shared.DomainDeliverabilityTrackingOption })
  subscribedDomains?: shared.DomainDeliverabilityTrackingOption[];
}


export class PutDeliverabilityDashboardOptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PutDeliverabilityDashboardOptionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PutDeliverabilityDashboardOptionRequestBody;
}


export class PutDeliverabilityDashboardOptionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  alreadyExistsException?: any;

  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  putDeliverabilityDashboardOptionResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
