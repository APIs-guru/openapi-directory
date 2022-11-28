import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetCreateDbSubnetGroupActionEnum {
    CreateDbSubnetGroup = "CreateDBSubnetGroup"
}

export enum GetCreateDbSubnetGroupVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}


export class GetCreateDbSubnetGroupQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCreateDbSubnetGroupActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBSubnetGroupDescription" })
  dbSubnetGroupDescription: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBSubnetGroupName" })
  dbSubnetGroupName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SubnetIds" })
  subnetIds: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCreateDbSubnetGroupVersionEnum;
}


export class GetCreateDbSubnetGroupHeaders extends SpeakeasyBase {
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


export class GetCreateDbSubnetGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCreateDbSubnetGroupQueryParams;

  @SpeakeasyMetadata()
  headers: GetCreateDbSubnetGroupHeaders;
}


export class GetCreateDbSubnetGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
