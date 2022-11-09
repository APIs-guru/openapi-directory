import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListStudioLifecycleConfigsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListStudioLifecycleConfigsXAmzTargetEnum {
    SageMakerListStudioLifecycleConfigs = "SageMaker.ListStudioLifecycleConfigs"
}


export class ListStudioLifecycleConfigsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListStudioLifecycleConfigsXAmzTargetEnum;
}


export class ListStudioLifecycleConfigsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListStudioLifecycleConfigsQueryParams;

  @Metadata()
  headers: ListStudioLifecycleConfigsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListStudioLifecycleConfigsRequest;
}


export class ListStudioLifecycleConfigsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listStudioLifecycleConfigsResponse?: shared.ListStudioLifecycleConfigsResponse;

  @Metadata()
  resourceInUse?: any;

  @Metadata()
  statusCode: number;
}
