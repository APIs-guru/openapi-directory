import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListWorkersWithQualificationTypeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListWorkersWithQualificationTypeXAmzTargetEnum {
    MTurkRequesterServiceV20170117ListWorkersWithQualificationType = "MTurkRequesterServiceV20170117.ListWorkersWithQualificationType"
}


export class ListWorkersWithQualificationTypeHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListWorkersWithQualificationTypeXAmzTargetEnum;
}


export class ListWorkersWithQualificationTypeRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListWorkersWithQualificationTypeQueryParams;

  @Metadata()
  headers: ListWorkersWithQualificationTypeHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListWorkersWithQualificationTypeRequest;
}


export class ListWorkersWithQualificationTypeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listWorkersWithQualificationTypeResponse?: shared.ListWorkersWithQualificationTypeResponse;

  @Metadata()
  requestError?: any;

  @Metadata()
  serviceFault?: any;

  @Metadata()
  statusCode: number;
}
