import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteGroupHeaders extends SpeakeasyBase {
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


export class DeleteGroupRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GroupARN" })
  groupArn?: string;

  @SpeakeasyMetadata({ data: "json, name=GroupName" })
  groupName?: string;
}


export class DeleteGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: DeleteGroupHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: DeleteGroupRequestBody;
}


export class DeleteGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteGroupResult?: Map<string, any>;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttledException?: any;
}
