import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetBacktrackDbClusterActionEnum {
    BacktrackDbCluster = "BacktrackDBCluster"
}

export enum GetBacktrackDbClusterVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class GetBacktrackDbClusterQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetBacktrackDbClusterActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=BacktrackTo" })
  backtrackTo: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DBClusterIdentifier" })
  dbClusterIdentifier: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Force" })
  force?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=UseEarliestTimeOnPointInTimeUnavailable" })
  useEarliestTimeOnPointInTimeUnavailable?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetBacktrackDbClusterVersionEnum;
}


export class GetBacktrackDbClusterHeaders extends SpeakeasyBase {
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


export class GetBacktrackDbClusterRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetBacktrackDbClusterQueryParams;

  @Metadata()
  headers: GetBacktrackDbClusterHeaders;
}


export class GetBacktrackDbClusterResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
