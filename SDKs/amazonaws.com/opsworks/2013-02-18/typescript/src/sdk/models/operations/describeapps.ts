import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeAppsXAmzTargetEnum {
    OpsWorks20130218DescribeApps = "OpsWorks_20130218.DescribeApps"
}


export class DescribeAppsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeAppsXAmzTargetEnum;
}


export class DescribeAppsRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeAppsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeAppsRequest;
}


export class DescribeAppsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeAppsResult?: shared.DescribeAppsResult;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
