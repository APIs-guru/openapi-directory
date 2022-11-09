import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeOperatingSystemsXAmzTargetEnum {
    OpsWorks20130218DescribeOperatingSystems = "OpsWorks_20130218.DescribeOperatingSystems"
}


export class DescribeOperatingSystemsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeOperatingSystemsXAmzTargetEnum;
}


export class DescribeOperatingSystemsRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeOperatingSystemsHeaders;
}


export class DescribeOperatingSystemsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeOperatingSystemsResponse?: shared.DescribeOperatingSystemsResponse;

  @Metadata()
  statusCode: number;
}
