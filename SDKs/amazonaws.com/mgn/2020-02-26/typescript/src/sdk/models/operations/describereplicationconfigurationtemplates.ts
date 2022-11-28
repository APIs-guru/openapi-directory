import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DescribeReplicationConfigurationTemplatesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}


export class DescribeReplicationConfigurationTemplatesHeaders extends SpeakeasyBase {
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
}


export class DescribeReplicationConfigurationTemplatesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=replicationConfigurationTemplateIDs" })
  replicationConfigurationTemplateIDs: string[];
}


export class DescribeReplicationConfigurationTemplatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DescribeReplicationConfigurationTemplatesQueryParams;

  @SpeakeasyMetadata()
  headers: DescribeReplicationConfigurationTemplatesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: DescribeReplicationConfigurationTemplatesRequestBody;
}


export class DescribeReplicationConfigurationTemplatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  describeReplicationConfigurationTemplatesResponse?: shared.DescribeReplicationConfigurationTemplatesResponse;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  uninitializedAccountException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
