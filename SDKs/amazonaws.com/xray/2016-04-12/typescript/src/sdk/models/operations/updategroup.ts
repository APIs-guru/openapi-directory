import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateGroupHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// UpdateGroupRequestBodyInsightsConfiguration
/** 
 * The structure containing configurations related to insights.
**/
export class UpdateGroupRequestBodyInsightsConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InsightsEnabled" })
  insightsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=NotificationsEnabled" })
  notificationsEnabled?: boolean;
}


export class UpdateGroupRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FilterExpression" })
  filterExpression?: string;

  @SpeakeasyMetadata({ data: "json, name=GroupARN" })
  groupArn?: string;

  @SpeakeasyMetadata({ data: "json, name=GroupName" })
  groupName?: string;

  @SpeakeasyMetadata({ data: "json, name=InsightsConfiguration" })
  insightsConfiguration?: UpdateGroupRequestBodyInsightsConfiguration;
}


export class UpdateGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdateGroupHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateGroupRequestBody;
}


export class UpdateGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttledException?: any;

  @SpeakeasyMetadata()
  updateGroupResult?: shared.UpdateGroupResult;
}
