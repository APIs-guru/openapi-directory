import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListInstancesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListInstancesXAmzTargetEnum {
    SwbExternalServiceListInstances = "SWBExternalService.ListInstances"
}


export class ListInstancesHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListInstancesXAmzTargetEnum;
}


export class ListInstancesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListInstancesQueryParams;

  @Metadata()
  headers: ListInstancesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListInstancesRequest;
}


export class ListInstancesResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  listInstancesResponse?: shared.ListInstancesResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
