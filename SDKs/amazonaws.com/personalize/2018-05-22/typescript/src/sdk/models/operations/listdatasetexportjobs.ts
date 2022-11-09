import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListDatasetExportJobsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum ListDatasetExportJobsXAmzTargetEnum {
    AmazonPersonalizeListDatasetExportJobs = "AmazonPersonalize.ListDatasetExportJobs"
}


export class ListDatasetExportJobsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListDatasetExportJobsXAmzTargetEnum;
}


export class ListDatasetExportJobsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListDatasetExportJobsQueryParams;

  @Metadata()
  headers: ListDatasetExportJobsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListDatasetExportJobsRequest;
}


export class ListDatasetExportJobsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  listDatasetExportJobsResponse?: shared.ListDatasetExportJobsResponse;

  @Metadata()
  statusCode: number;
}
