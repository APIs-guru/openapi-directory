import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeMyUserProfileXAmzTargetEnum {
    OpsWorks20130218DescribeMyUserProfile = "OpsWorks_20130218.DescribeMyUserProfile"
}


export class DescribeMyUserProfileHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeMyUserProfileXAmzTargetEnum;
}


export class DescribeMyUserProfileRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeMyUserProfileHeaders;
}


export class DescribeMyUserProfileResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeMyUserProfileResult?: shared.DescribeMyUserProfileResult;

  @Metadata()
  statusCode: number;
}
