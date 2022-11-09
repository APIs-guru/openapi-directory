import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetFailoverDbClusterActionEnum {
    FailoverDbCluster = "FailoverDBCluster"
}

export enum GetFailoverDbClusterVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class GetFailoverDbClusterQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetFailoverDbClusterActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DBClusterIdentifier" })
  dbClusterIdentifier?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TargetDBInstanceIdentifier" })
  targetDbInstanceIdentifier?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetFailoverDbClusterVersionEnum;
}


export class GetFailoverDbClusterHeaders extends SpeakeasyBase {
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


export class GetFailoverDbClusterRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetFailoverDbClusterQueryParams;

  @Metadata()
  headers: GetFailoverDbClusterHeaders;
}


export class GetFailoverDbClusterResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
