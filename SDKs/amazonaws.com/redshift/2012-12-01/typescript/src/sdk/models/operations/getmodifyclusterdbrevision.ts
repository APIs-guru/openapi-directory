import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetModifyClusterDbRevisionActionEnum {
    ModifyClusterDbRevision = "ModifyClusterDbRevision"
}

export enum GetModifyClusterDbRevisionVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetModifyClusterDbRevisionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyClusterDbRevisionActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ClusterIdentifier" })
  clusterIdentifier: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=RevisionTarget" })
  revisionTarget: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyClusterDbRevisionVersionEnum;
}


export class GetModifyClusterDbRevisionHeaders extends SpeakeasyBase {
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


export class GetModifyClusterDbRevisionRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetModifyClusterDbRevisionQueryParams;

  @Metadata()
  headers: GetModifyClusterDbRevisionHeaders;
}


export class GetModifyClusterDbRevisionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
