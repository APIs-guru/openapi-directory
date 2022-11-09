import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeWorkteamXAmzTargetEnum {
    SageMakerDescribeWorkteam = "SageMaker.DescribeWorkteam"
}


export class DescribeWorkteamHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeWorkteamXAmzTargetEnum;
}


export class DescribeWorkteamRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeWorkteamHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeWorkteamRequest;
}


export class DescribeWorkteamResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeWorkteamResponse?: shared.DescribeWorkteamResponse;

  @Metadata()
  statusCode: number;
}
