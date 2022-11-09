import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListCommandsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListCommandsXAmzTargetEnum {
    AmazonSsmListCommands = "AmazonSSM.ListCommands"
}


export class ListCommandsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListCommandsXAmzTargetEnum;
}


export class ListCommandsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListCommandsQueryParams;

  @Metadata()
  headers: ListCommandsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListCommandsRequest;
}


export class ListCommandsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidCommandId?: any;

  @Metadata()
  invalidFilterKey?: any;

  @Metadata()
  invalidInstanceId?: any;

  @Metadata()
  invalidNextToken?: any;

  @Metadata()
  listCommandsResult?: shared.ListCommandsResult;

  @Metadata()
  statusCode: number;
}
