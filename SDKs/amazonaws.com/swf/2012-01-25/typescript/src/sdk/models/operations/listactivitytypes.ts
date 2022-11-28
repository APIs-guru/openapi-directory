import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListActivityTypesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maximumPageSize" })
  maximumPageSize?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextPageToken" })
  nextPageToken?: string;
}

export enum ListActivityTypesXAmzTargetEnum {
    SimpleWorkflowServiceListActivityTypes = "SimpleWorkflowService.ListActivityTypes"
}


export class ListActivityTypesHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListActivityTypesXAmzTargetEnum;
}


export class ListActivityTypesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListActivityTypesQueryParams;

  @SpeakeasyMetadata()
  headers: ListActivityTypesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ListActivityTypesInput;
}


export class ListActivityTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  activityTypeInfos?: shared.ActivityTypeInfos;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  operationNotPermittedFault?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unknownResourceFault?: any;
}
