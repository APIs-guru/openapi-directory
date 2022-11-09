import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetServersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum GetServersXAmzTargetEnum {
    AwsServerMigrationServiceV20161024GetServers = "AWSServerMigrationService_V2016_10_24.GetServers"
}


export class GetServersHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetServersXAmzTargetEnum;
}


export class GetServersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetServersQueryParams;

  @Metadata()
  headers: GetServersHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetServersRequest;
}


export class GetServersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getServersResponse?: shared.GetServersResponse;

  @Metadata()
  internalError?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  missingRequiredParameterException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unauthorizedOperationException?: any;
}
