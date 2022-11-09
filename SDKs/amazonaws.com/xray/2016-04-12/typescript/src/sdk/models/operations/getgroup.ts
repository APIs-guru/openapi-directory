import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetGroupHeaders extends SpeakeasyBase {
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


export class GetGroupRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=GroupARN" })
  groupArn?: string;

  @Metadata({ data: "json, name=GroupName" })
  groupName?: string;
}


export class GetGroupRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetGroupHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: GetGroupRequestBody;
}


export class GetGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getGroupResult?: shared.GetGroupResult;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttledException?: any;
}
