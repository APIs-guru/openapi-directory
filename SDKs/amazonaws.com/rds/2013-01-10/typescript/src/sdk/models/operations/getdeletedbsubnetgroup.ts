import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDeleteDbSubnetGroupActionEnum {
    DeleteDbSubnetGroup = "DeleteDBSubnetGroup"
}

export enum GetDeleteDbSubnetGroupVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}


export class GetDeleteDbSubnetGroupQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteDbSubnetGroupActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBSubnetGroupName" })
  dbSubnetGroupName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteDbSubnetGroupVersionEnum;
}


export class GetDeleteDbSubnetGroupHeaders extends SpeakeasyBase {
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


export class GetDeleteDbSubnetGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDeleteDbSubnetGroupQueryParams;

  @SpeakeasyMetadata()
  headers: GetDeleteDbSubnetGroupHeaders;
}


export class GetDeleteDbSubnetGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
