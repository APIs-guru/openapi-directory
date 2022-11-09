import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeleteClusterSubnetGroupActionEnum {
    DeleteClusterSubnetGroup = "DeleteClusterSubnetGroup"
}

export enum GetDeleteClusterSubnetGroupVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetDeleteClusterSubnetGroupQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteClusterSubnetGroupActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ClusterSubnetGroupName" })
  clusterSubnetGroupName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteClusterSubnetGroupVersionEnum;
}


export class GetDeleteClusterSubnetGroupHeaders extends SpeakeasyBase {
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


export class GetDeleteClusterSubnetGroupRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeleteClusterSubnetGroupQueryParams;

  @Metadata()
  headers: GetDeleteClusterSubnetGroupHeaders;
}


export class GetDeleteClusterSubnetGroupResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
