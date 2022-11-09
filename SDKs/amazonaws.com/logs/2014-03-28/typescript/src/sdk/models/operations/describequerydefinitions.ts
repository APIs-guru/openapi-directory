import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeQueryDefinitionsXAmzTargetEnum {
    Logs20140328DescribeQueryDefinitions = "Logs_20140328.DescribeQueryDefinitions"
}


export class DescribeQueryDefinitionsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeQueryDefinitionsXAmzTargetEnum;
}


export class DescribeQueryDefinitionsRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeQueryDefinitionsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeQueryDefinitionsRequest;
}


export class DescribeQueryDefinitionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeQueryDefinitionsResponse?: shared.DescribeQueryDefinitionsResponse;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;
}
