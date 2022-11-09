import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetConnectorsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum GetConnectorsXAmzTargetEnum {
    AwsServerMigrationServiceV20161024GetConnectors = "AWSServerMigrationService_V2016_10_24.GetConnectors"
}


export class GetConnectorsHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetConnectorsXAmzTargetEnum;
}


export class GetConnectorsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetConnectorsQueryParams;

  @Metadata()
  headers: GetConnectorsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetConnectorsRequest;
}


export class GetConnectorsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getConnectorsResponse?: shared.GetConnectorsResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  unauthorizedOperationException?: any;
}
