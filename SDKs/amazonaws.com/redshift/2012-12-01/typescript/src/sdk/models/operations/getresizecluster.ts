import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetResizeClusterActionEnum {
    ResizeCluster = "ResizeCluster"
}

export enum GetResizeClusterVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetResizeClusterQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetResizeClusterActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Classic" })
  classic?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ClusterIdentifier" })
  clusterIdentifier: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ClusterType" })
  clusterType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NodeType" })
  nodeType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NumberOfNodes" })
  numberOfNodes?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetResizeClusterVersionEnum;
}


export class GetResizeClusterHeaders extends SpeakeasyBase {
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


export class GetResizeClusterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetResizeClusterQueryParams;

  @SpeakeasyMetadata()
  headers: GetResizeClusterHeaders;
}


export class GetResizeClusterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
