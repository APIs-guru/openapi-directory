import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeleteDbParameterGroupActionEnum {
    DeleteDbParameterGroup = "DeleteDBParameterGroup"
}

export enum GetDeleteDbParameterGroupVersionEnum {
    TwoThousandAndThirteen0909 = "2013-09-09"
}


export class GetDeleteDbParameterGroupQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteDbParameterGroupActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DBParameterGroupName" })
  dbParameterGroupName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteDbParameterGroupVersionEnum;
}


export class GetDeleteDbParameterGroupHeaders extends SpeakeasyBase {
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


export class GetDeleteDbParameterGroupRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeleteDbParameterGroupQueryParams;

  @Metadata()
  headers: GetDeleteDbParameterGroupHeaders;
}


export class GetDeleteDbParameterGroupResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
