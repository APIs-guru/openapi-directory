import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeCommunicationsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum DescribeCommunicationsXAmzTargetEnum {
    AwsSupport20130415DescribeCommunications = "AWSSupport_20130415.DescribeCommunications"
}


export class DescribeCommunicationsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeCommunicationsXAmzTargetEnum;
}


export class DescribeCommunicationsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeCommunicationsQueryParams;

  @Metadata()
  headers: DescribeCommunicationsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeCommunicationsRequest;
}


export class DescribeCommunicationsResponse extends SpeakeasyBase {
  @Metadata()
  caseIdNotFound?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  describeCommunicationsResponse?: shared.DescribeCommunicationsResponse;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  statusCode: number;
}
