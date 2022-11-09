import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeRuleGroupXAmzTargetEnum {
    NetworkFirewall20201112DescribeRuleGroup = "NetworkFirewall_20201112.DescribeRuleGroup"
}


export class DescribeRuleGroupHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeRuleGroupXAmzTargetEnum;
}


export class DescribeRuleGroupRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeRuleGroupHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeRuleGroupRequest;
}


export class DescribeRuleGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeRuleGroupResponse?: shared.DescribeRuleGroupResponse;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
