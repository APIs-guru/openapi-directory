import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListImportJobsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListImportJobsHeaders extends SpeakeasyBase {
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
}

export enum ListImportJobsRequestBodyImportDestinationTypeEnum {
    SuppressionList = "SUPPRESSION_LIST"
,    ContactList = "CONTACT_LIST"
}


export class ListImportJobsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ImportDestinationType" })
  importDestinationType?: ListImportJobsRequestBodyImportDestinationTypeEnum;
}


export class ListImportJobsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListImportJobsQueryParams;

  @Metadata()
  headers: ListImportJobsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: ListImportJobsRequestBody;
}


export class ListImportJobsResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  listImportJobsResponse?: shared.ListImportJobsResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
