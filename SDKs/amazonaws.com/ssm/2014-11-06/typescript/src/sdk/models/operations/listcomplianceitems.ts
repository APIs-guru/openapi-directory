import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListComplianceItemsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListComplianceItemsXAmzTargetEnum {
    AmazonSsmListComplianceItems = "AmazonSSM.ListComplianceItems"
}


export class ListComplianceItemsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListComplianceItemsXAmzTargetEnum;
}


export class ListComplianceItemsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListComplianceItemsQueryParams;

  @Metadata()
  headers: ListComplianceItemsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListComplianceItemsRequest;
}


export class ListComplianceItemsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidFilter?: any;

  @Metadata()
  invalidNextToken?: any;

  @Metadata()
  invalidResourceId?: any;

  @Metadata()
  invalidResourceType?: any;

  @Metadata()
  listComplianceItemsResult?: shared.ListComplianceItemsResult;

  @Metadata()
  statusCode: number;
}
