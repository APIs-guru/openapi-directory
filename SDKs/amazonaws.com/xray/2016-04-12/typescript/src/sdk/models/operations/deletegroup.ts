import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteGroupHeaders extends SpeakeasyBase {
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


export class DeleteGroupRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=GroupARN" })
  groupArn?: string;

  @Metadata({ data: "json, name=GroupName" })
  groupName?: string;
}


export class DeleteGroupRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteGroupHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: DeleteGroupRequestBody;
}


export class DeleteGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteGroupResult?: Map<string, any>;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttledException?: any;
}
