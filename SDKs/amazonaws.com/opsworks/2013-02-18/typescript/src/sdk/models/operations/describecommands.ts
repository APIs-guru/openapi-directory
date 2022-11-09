import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeCommandsXAmzTargetEnum {
    OpsWorks20130218DescribeCommands = "OpsWorks_20130218.DescribeCommands"
}


export class DescribeCommandsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeCommandsXAmzTargetEnum;
}


export class DescribeCommandsRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeCommandsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeCommandsRequest;
}


export class DescribeCommandsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeCommandsResult?: shared.DescribeCommandsResult;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
