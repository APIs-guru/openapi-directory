import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListComplianceSummariesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListComplianceSummariesXAmzTargetEnum {
    AmazonSsmListComplianceSummaries = "AmazonSSM.ListComplianceSummaries"
}


export class ListComplianceSummariesHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListComplianceSummariesXAmzTargetEnum;
}


export class ListComplianceSummariesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListComplianceSummariesQueryParams;

  @Metadata()
  headers: ListComplianceSummariesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListComplianceSummariesRequest;
}


export class ListComplianceSummariesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidFilter?: any;

  @Metadata()
  invalidNextToken?: any;

  @Metadata()
  listComplianceSummariesResult?: shared.ListComplianceSummariesResult;

  @Metadata()
  statusCode: number;
}
