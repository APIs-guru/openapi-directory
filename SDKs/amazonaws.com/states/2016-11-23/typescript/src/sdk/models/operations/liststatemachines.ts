import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListStateMachinesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum ListStateMachinesXAmzTargetEnum {
    AwsStepFunctionsListStateMachines = "AWSStepFunctions.ListStateMachines"
}


export class ListStateMachinesHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListStateMachinesXAmzTargetEnum;
}


export class ListStateMachinesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListStateMachinesQueryParams;

  @Metadata()
  headers: ListStateMachinesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListStateMachinesInput;
}


export class ListStateMachinesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidToken?: any;

  @Metadata()
  listStateMachinesOutput?: shared.ListStateMachinesOutput;

  @Metadata()
  statusCode: number;
}
