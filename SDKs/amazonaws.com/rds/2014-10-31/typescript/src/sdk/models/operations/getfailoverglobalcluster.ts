import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetFailoverGlobalClusterActionEnum {
    FailoverGlobalCluster = "FailoverGlobalCluster"
}

export enum GetFailoverGlobalClusterVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class GetFailoverGlobalClusterQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetFailoverGlobalClusterActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=GlobalClusterIdentifier" })
  globalClusterIdentifier: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TargetDbClusterIdentifier" })
  targetDbClusterIdentifier: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetFailoverGlobalClusterVersionEnum;
}


export class GetFailoverGlobalClusterHeaders extends SpeakeasyBase {
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


export class GetFailoverGlobalClusterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetFailoverGlobalClusterQueryParams;

  @SpeakeasyMetadata()
  headers: GetFailoverGlobalClusterHeaders;
}


export class GetFailoverGlobalClusterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
