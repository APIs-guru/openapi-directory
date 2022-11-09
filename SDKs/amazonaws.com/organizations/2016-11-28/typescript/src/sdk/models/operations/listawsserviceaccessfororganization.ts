import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListAwsServiceAccessForOrganizationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListAwsServiceAccessForOrganizationXAmzTargetEnum {
    AwsOrganizationsV20161128ListAwsServiceAccessForOrganization = "AWSOrganizationsV20161128.ListAWSServiceAccessForOrganization"
}


export class ListAwsServiceAccessForOrganizationHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListAwsServiceAccessForOrganizationXAmzTargetEnum;
}


export class ListAwsServiceAccessForOrganizationRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListAwsServiceAccessForOrganizationQueryParams;

  @Metadata()
  headers: ListAwsServiceAccessForOrganizationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListAwsServiceAccessForOrganizationRequest;
}


export class ListAwsServiceAccessForOrganizationResponse extends SpeakeasyBase {
  @Metadata()
  awsOrganizationsNotInUseException?: any;

  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  constraintViolationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  listAwsServiceAccessForOrganizationResponse?: shared.ListAwsServiceAccessForOrganizationResponse;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  unsupportedApiEndpointException?: any;
}
