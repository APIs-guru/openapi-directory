import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeleteDbSubnetGroupActionEnum {
    DeleteDbSubnetGroup = "DeleteDBSubnetGroup"
}

export enum GetDeleteDbSubnetGroupVersionEnum {
    TwoThousandAndThirteen0909 = "2013-09-09"
}


export class GetDeleteDbSubnetGroupQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteDbSubnetGroupActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DBSubnetGroupName" })
  dbSubnetGroupName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteDbSubnetGroupVersionEnum;
}


export class GetDeleteDbSubnetGroupHeaders extends SpeakeasyBase {
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


export class GetDeleteDbSubnetGroupRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeleteDbSubnetGroupQueryParams;

  @Metadata()
  headers: GetDeleteDbSubnetGroupHeaders;
}


export class GetDeleteDbSubnetGroupResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
