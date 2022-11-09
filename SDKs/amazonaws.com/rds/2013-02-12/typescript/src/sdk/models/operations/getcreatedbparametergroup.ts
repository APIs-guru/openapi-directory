import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetCreateDbParameterGroupActionEnum {
    CreateDbParameterGroup = "CreateDBParameterGroup"
}

export enum GetCreateDbParameterGroupVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}


export class GetCreateDbParameterGroupQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCreateDbParameterGroupActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DBParameterGroupFamily" })
  dbParameterGroupFamily: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DBParameterGroupName" })
  dbParameterGroupName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Description" })
  description: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCreateDbParameterGroupVersionEnum;
}


export class GetCreateDbParameterGroupHeaders extends SpeakeasyBase {
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


export class GetCreateDbParameterGroupRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCreateDbParameterGroupQueryParams;

  @Metadata()
  headers: GetCreateDbParameterGroupHeaders;
}


export class GetCreateDbParameterGroupResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
