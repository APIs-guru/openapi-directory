import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListExecutionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum ListExecutionsXAmzTargetEnum {
    AwsStepFunctionsListExecutions = "AWSStepFunctions.ListExecutions"
}


export class ListExecutionsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListExecutionsXAmzTargetEnum;
}


export class ListExecutionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListExecutionsQueryParams;

  @SpeakeasyMetadata()
  headers: ListExecutionsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ListExecutionsInput;
}


export class ListExecutionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidArn?: any;

  @SpeakeasyMetadata()
  invalidToken?: any;

  @SpeakeasyMetadata()
  listExecutionsOutput?: shared.ListExecutionsOutput;

  @SpeakeasyMetadata()
  stateMachineDoesNotExist?: any;

  @SpeakeasyMetadata()
  stateMachineTypeNotSupported?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
