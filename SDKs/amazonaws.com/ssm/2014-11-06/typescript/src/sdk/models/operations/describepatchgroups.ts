import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribePatchGroupsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum DescribePatchGroupsXAmzTargetEnum {
    AmazonSsmDescribePatchGroups = "AmazonSSM.DescribePatchGroups"
}


export class DescribePatchGroupsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribePatchGroupsXAmzTargetEnum;
}


export class DescribePatchGroupsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribePatchGroupsQueryParams;

  @Metadata()
  headers: DescribePatchGroupsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribePatchGroupsRequest;
}


export class DescribePatchGroupsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describePatchGroupsResult?: shared.DescribePatchGroupsResult;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  statusCode: number;
}
