import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListInstancesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListInstancesXAmzTargetEnum {
    Route53AutoNamingV20170314ListInstances = "Route53AutoNaming_v20170314.ListInstances"
}


export class ListInstancesHeaders extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: ListInstancesXAmzTargetEnum;
}


export class ListInstancesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListInstancesQueryParams;

  @SpeakeasyMetadata()
  headers: ListInstancesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ListInstancesRequest;
}


export class ListInstancesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidInput?: any;

  @SpeakeasyMetadata()
  listInstancesResponse?: shared.ListInstancesResponse;

  @SpeakeasyMetadata()
  serviceNotFound?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
