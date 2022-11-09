import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeOrganizationalUnitXAmzTargetEnum {
    AwsOrganizationsV20161128DescribeOrganizationalUnit = "AWSOrganizationsV20161128.DescribeOrganizationalUnit"
}


export class DescribeOrganizationalUnitHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeOrganizationalUnitXAmzTargetEnum;
}


export class DescribeOrganizationalUnitRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeOrganizationalUnitHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeOrganizationalUnitRequest;
}


export class DescribeOrganizationalUnitResponse extends SpeakeasyBase {
  @Metadata()
  awsOrganizationsNotInUseException?: any;

  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  describeOrganizationalUnitResponse?: shared.DescribeOrganizationalUnitResponse;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  organizationalUnitNotFoundException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
