import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetModifyDbSubnetGroupActionEnum {
    ModifyDbSubnetGroup = "ModifyDBSubnetGroup"
}

export enum GetModifyDbSubnetGroupVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}


export class GetModifyDbSubnetGroupQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyDbSubnetGroupActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DBSubnetGroupDescription" })
  dbSubnetGroupDescription?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DBSubnetGroupName" })
  dbSubnetGroupName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SubnetIds" })
  subnetIds: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyDbSubnetGroupVersionEnum;
}


export class GetModifyDbSubnetGroupHeaders extends SpeakeasyBase {
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


export class GetModifyDbSubnetGroupRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetModifyDbSubnetGroupQueryParams;

  @Metadata()
  headers: GetModifyDbSubnetGroupHeaders;
}


export class GetModifyDbSubnetGroupResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
