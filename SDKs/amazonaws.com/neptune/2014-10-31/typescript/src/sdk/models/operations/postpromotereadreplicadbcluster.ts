import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostPromoteReadReplicaDbClusterActionEnum {
    PromoteReadReplicaDbCluster = "PromoteReadReplicaDBCluster"
}

export enum PostPromoteReadReplicaDbClusterVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class PostPromoteReadReplicaDbClusterQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostPromoteReadReplicaDbClusterActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostPromoteReadReplicaDbClusterVersionEnum;
}


export class PostPromoteReadReplicaDbClusterHeaders extends SpeakeasyBase {
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


export class PostPromoteReadReplicaDbClusterRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostPromoteReadReplicaDbClusterQueryParams;

  @Metadata()
  headers: PostPromoteReadReplicaDbClusterHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostPromoteReadReplicaDbClusterResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
