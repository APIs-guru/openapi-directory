import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetBacktrackDbClusterActionEnum {
    BacktrackDbCluster = "BacktrackDBCluster"
}

export enum GetBacktrackDbClusterVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class GetBacktrackDbClusterQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetBacktrackDbClusterActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=BacktrackTo" })
  backtrackTo: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBClusterIdentifier" })
  dbClusterIdentifier: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Force" })
  force?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=UseEarliestTimeOnPointInTimeUnavailable" })
  useEarliestTimeOnPointInTimeUnavailable?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetBacktrackDbClusterVersionEnum;
}


export class GetBacktrackDbClusterHeaders extends SpeakeasyBase {
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


export class GetBacktrackDbClusterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetBacktrackDbClusterQueryParams;

  @SpeakeasyMetadata()
  headers: GetBacktrackDbClusterHeaders;
}


export class GetBacktrackDbClusterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
