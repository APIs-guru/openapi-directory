import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetModifyClusterSubnetGroupActionEnum {
    ModifyClusterSubnetGroup = "ModifyClusterSubnetGroup"
}

export enum GetModifyClusterSubnetGroupVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetModifyClusterSubnetGroupQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyClusterSubnetGroupActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ClusterSubnetGroupName" })
  clusterSubnetGroupName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Description" })
  description?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SubnetIds" })
  subnetIds: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyClusterSubnetGroupVersionEnum;
}


export class GetModifyClusterSubnetGroupHeaders extends SpeakeasyBase {
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


export class GetModifyClusterSubnetGroupRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetModifyClusterSubnetGroupQueryParams;

  @Metadata()
  headers: GetModifyClusterSubnetGroupHeaders;
}


export class GetModifyClusterSubnetGroupResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
