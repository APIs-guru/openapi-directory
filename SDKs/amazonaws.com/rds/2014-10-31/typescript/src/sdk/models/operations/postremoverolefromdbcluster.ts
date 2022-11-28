import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostRemoveRoleFromDbClusterActionEnum {
    RemoveRoleFromDbCluster = "RemoveRoleFromDBCluster"
}

export enum PostRemoveRoleFromDbClusterVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class PostRemoveRoleFromDbClusterQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostRemoveRoleFromDbClusterActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostRemoveRoleFromDbClusterVersionEnum;
}


export class PostRemoveRoleFromDbClusterHeaders extends SpeakeasyBase {
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


export class PostRemoveRoleFromDbClusterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostRemoveRoleFromDbClusterQueryParams;

  @SpeakeasyMetadata()
  headers: PostRemoveRoleFromDbClusterHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostRemoveRoleFromDbClusterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
