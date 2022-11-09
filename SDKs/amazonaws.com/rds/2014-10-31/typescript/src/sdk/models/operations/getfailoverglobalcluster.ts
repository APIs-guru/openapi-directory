import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetFailoverGlobalClusterActionEnum {
    FailoverGlobalCluster = "FailoverGlobalCluster"
}

export enum GetFailoverGlobalClusterVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class GetFailoverGlobalClusterQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetFailoverGlobalClusterActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=GlobalClusterIdentifier" })
  globalClusterIdentifier: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TargetDbClusterIdentifier" })
  targetDbClusterIdentifier: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetFailoverGlobalClusterVersionEnum;
}


export class GetFailoverGlobalClusterHeaders extends SpeakeasyBase {
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


export class GetFailoverGlobalClusterRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetFailoverGlobalClusterQueryParams;

  @Metadata()
  headers: GetFailoverGlobalClusterHeaders;
}


export class GetFailoverGlobalClusterResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
