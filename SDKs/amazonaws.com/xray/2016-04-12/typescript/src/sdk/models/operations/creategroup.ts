import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateGroupHeaders extends SpeakeasyBase {
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
}


// CreateGroupRequestBodyInsightsConfiguration
/** 
 * The structure containing configurations related to insights.
**/
export class CreateGroupRequestBodyInsightsConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=InsightsEnabled" })
  insightsEnabled?: boolean;

  @Metadata({ data: "json, name=NotificationsEnabled" })
  notificationsEnabled?: boolean;
}


export class CreateGroupRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=FilterExpression" })
  filterExpression?: string;

  @Metadata({ data: "json, name=GroupName" })
  groupName: string;

  @Metadata({ data: "json, name=InsightsConfiguration" })
  insightsConfiguration?: CreateGroupRequestBodyInsightsConfiguration;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: shared.Tag[];
}


export class CreateGroupRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateGroupHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateGroupRequestBody;
}


export class CreateGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createGroupResult?: shared.CreateGroupResult;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttledException?: any;
}
