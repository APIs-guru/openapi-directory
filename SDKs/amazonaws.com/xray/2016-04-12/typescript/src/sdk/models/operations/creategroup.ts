import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateGroupHeaders extends SpeakeasyBase {
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


// CreateGroupRequestBodyInsightsConfiguration
/** 
 * The structure containing configurations related to insights.
**/
export class CreateGroupRequestBodyInsightsConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InsightsEnabled" })
  insightsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=NotificationsEnabled" })
  notificationsEnabled?: boolean;
}


export class CreateGroupRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FilterExpression" })
  filterExpression?: string;

  @SpeakeasyMetadata({ data: "json, name=GroupName" })
  groupName: string;

  @SpeakeasyMetadata({ data: "json, name=InsightsConfiguration" })
  insightsConfiguration?: CreateGroupRequestBodyInsightsConfiguration;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: shared.Tag[];
}


export class CreateGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateGroupHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateGroupRequestBody;
}


export class CreateGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createGroupResult?: shared.CreateGroupResult;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttledException?: any;
}
