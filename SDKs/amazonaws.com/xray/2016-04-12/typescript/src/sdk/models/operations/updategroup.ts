import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateGroupHeaders extends SpeakeasyBase {
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


// UpdateGroupRequestBodyInsightsConfiguration
/** 
 * The structure containing configurations related to insights.
**/
export class UpdateGroupRequestBodyInsightsConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=InsightsEnabled" })
  insightsEnabled?: boolean;

  @Metadata({ data: "json, name=NotificationsEnabled" })
  notificationsEnabled?: boolean;
}


export class UpdateGroupRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=FilterExpression" })
  filterExpression?: string;

  @Metadata({ data: "json, name=GroupARN" })
  groupArn?: string;

  @Metadata({ data: "json, name=GroupName" })
  groupName?: string;

  @Metadata({ data: "json, name=InsightsConfiguration" })
  insightsConfiguration?: UpdateGroupRequestBodyInsightsConfiguration;
}


export class UpdateGroupRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateGroupHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateGroupRequestBody;
}


export class UpdateGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttledException?: any;

  @Metadata()
  updateGroupResult?: shared.UpdateGroupResult;
}
