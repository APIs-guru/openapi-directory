import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeServersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum DescribeServersXAmzTargetEnum {
    OpsWorksCmV20161101DescribeServers = "OpsWorksCM_V2016_11_01.DescribeServers"
}


export class DescribeServersHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeServersXAmzTargetEnum;
}


export class DescribeServersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeServersQueryParams;

  @Metadata()
  headers: DescribeServersHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeServersRequest;
}


export class DescribeServersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeServersResponse?: shared.DescribeServersResponse;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
