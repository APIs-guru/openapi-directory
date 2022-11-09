import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetRemoveRoleFromDbClusterActionEnum {
    RemoveRoleFromDbCluster = "RemoveRoleFromDBCluster"
}

export enum GetRemoveRoleFromDbClusterVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class GetRemoveRoleFromDbClusterQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetRemoveRoleFromDbClusterActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DBClusterIdentifier" })
  dbClusterIdentifier: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=FeatureName" })
  featureName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=RoleArn" })
  roleArn: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetRemoveRoleFromDbClusterVersionEnum;
}


export class GetRemoveRoleFromDbClusterHeaders extends SpeakeasyBase {
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


export class GetRemoveRoleFromDbClusterRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRemoveRoleFromDbClusterQueryParams;

  @Metadata()
  headers: GetRemoveRoleFromDbClusterHeaders;
}


export class GetRemoveRoleFromDbClusterResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
