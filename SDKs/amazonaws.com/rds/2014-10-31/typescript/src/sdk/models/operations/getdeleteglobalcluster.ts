import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDeleteGlobalClusterActionEnum {
    DeleteGlobalCluster = "DeleteGlobalCluster"
}

export enum GetDeleteGlobalClusterVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class GetDeleteGlobalClusterQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteGlobalClusterActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=GlobalClusterIdentifier" })
  globalClusterIdentifier: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteGlobalClusterVersionEnum;
}


export class GetDeleteGlobalClusterHeaders extends SpeakeasyBase {
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


export class GetDeleteGlobalClusterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDeleteGlobalClusterQueryParams;

  @SpeakeasyMetadata()
  headers: GetDeleteGlobalClusterHeaders;
}


export class GetDeleteGlobalClusterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
