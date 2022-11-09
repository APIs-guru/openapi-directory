import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeCasesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum DescribeCasesXAmzTargetEnum {
    AwsSupport20130415DescribeCases = "AWSSupport_20130415.DescribeCases"
}


export class DescribeCasesHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeCasesXAmzTargetEnum;
}


export class DescribeCasesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeCasesQueryParams;

  @Metadata()
  headers: DescribeCasesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeCasesRequest;
}


export class DescribeCasesResponse extends SpeakeasyBase {
  @Metadata()
  caseIdNotFound?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  describeCasesResponse?: shared.DescribeCasesResponse;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  statusCode: number;
}
