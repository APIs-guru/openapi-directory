import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateDashboardPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dashboardId" })
  dashboardId: string;
}


export class UpdateDashboardHeaders extends SpeakeasyBase {
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


export class UpdateDashboardRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "json, name=dashboardDefinition" })
  dashboardDefinition: string;

  @SpeakeasyMetadata({ data: "json, name=dashboardDescription" })
  dashboardDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=dashboardName" })
  dashboardName: string;
}


export class UpdateDashboardRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateDashboardPathParams;

  @SpeakeasyMetadata()
  headers: UpdateDashboardHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateDashboardRequestBody;
}


export class UpdateDashboardResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  updateDashboardResponse?: Map<string, any>;
}
