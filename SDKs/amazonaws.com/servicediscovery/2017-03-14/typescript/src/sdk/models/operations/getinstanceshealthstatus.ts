import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetInstancesHealthStatusQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum GetInstancesHealthStatusXAmzTargetEnum {
    Route53AutoNamingV20170314GetInstancesHealthStatus = "Route53AutoNaming_v20170314.GetInstancesHealthStatus"
}


export class GetInstancesHealthStatusHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: GetInstancesHealthStatusXAmzTargetEnum;
}


export class GetInstancesHealthStatusRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetInstancesHealthStatusQueryParams;

  @Metadata()
  headers: GetInstancesHealthStatusHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetInstancesHealthStatusRequest;
}


export class GetInstancesHealthStatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getInstancesHealthStatusResponse?: shared.GetInstancesHealthStatusResponse;

  @Metadata()
  instanceNotFound?: any;

  @Metadata()
  invalidInput?: any;

  @Metadata()
  serviceNotFound?: any;

  @Metadata()
  statusCode: number;
}
