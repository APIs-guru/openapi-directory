import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetCreateDbSubnetGroupActionEnum {
    CreateDbSubnetGroup = "CreateDBSubnetGroup"
}

export enum GetCreateDbSubnetGroupVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}


export class GetCreateDbSubnetGroupQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCreateDbSubnetGroupActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DBSubnetGroupDescription" })
  dbSubnetGroupDescription: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DBSubnetGroupName" })
  dbSubnetGroupName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SubnetIds" })
  subnetIds: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCreateDbSubnetGroupVersionEnum;
}


export class GetCreateDbSubnetGroupHeaders extends SpeakeasyBase {
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


export class GetCreateDbSubnetGroupRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCreateDbSubnetGroupQueryParams;

  @Metadata()
  headers: GetCreateDbSubnetGroupHeaders;
}


export class GetCreateDbSubnetGroupResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
