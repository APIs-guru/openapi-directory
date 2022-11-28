import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetCreateDbParameterGroupActionEnum {
    CreateDbParameterGroup = "CreateDBParameterGroup"
}

export enum GetCreateDbParameterGroupVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}


export class GetCreateDbParameterGroupQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCreateDbParameterGroupActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBParameterGroupFamily" })
  dbParameterGroupFamily: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBParameterGroupName" })
  dbParameterGroupName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCreateDbParameterGroupVersionEnum;
}


export class GetCreateDbParameterGroupHeaders extends SpeakeasyBase {
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


export class GetCreateDbParameterGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCreateDbParameterGroupQueryParams;

  @SpeakeasyMetadata()
  headers: GetCreateDbParameterGroupHeaders;
}


export class GetCreateDbParameterGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
