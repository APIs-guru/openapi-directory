import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListServersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListServersXAmzTargetEnum {
    TransferServiceListServers = "TransferService.ListServers"
}


export class ListServersHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListServersXAmzTargetEnum;
}


export class ListServersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListServersQueryParams;

  @Metadata()
  headers: ListServersHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListServersRequest;
}


export class ListServersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServiceError?: any;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  listServersResponse?: shared.ListServersResponse;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;
}
