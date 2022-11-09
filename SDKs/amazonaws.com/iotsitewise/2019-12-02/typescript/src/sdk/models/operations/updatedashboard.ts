import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateDashboardPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=dashboardId" })
  dashboardId: string;
}


export class UpdateDashboardHeaders extends SpeakeasyBase {
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


export class UpdateDashboardRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=dashboardDefinition" })
  dashboardDefinition: string;

  @Metadata({ data: "json, name=dashboardDescription" })
  dashboardDescription?: string;

  @Metadata({ data: "json, name=dashboardName" })
  dashboardName: string;
}


export class UpdateDashboardRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateDashboardPathParams;

  @Metadata()
  headers: UpdateDashboardHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateDashboardRequestBody;
}


export class UpdateDashboardResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  updateDashboardResponse?: Map<string, any>;
}
