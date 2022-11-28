import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetAddRoleToDbClusterActionEnum {
    AddRoleToDbCluster = "AddRoleToDBCluster"
}

export enum GetAddRoleToDbClusterVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class GetAddRoleToDbClusterQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetAddRoleToDbClusterActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBClusterIdentifier" })
  dbClusterIdentifier: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=FeatureName" })
  featureName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RoleArn" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetAddRoleToDbClusterVersionEnum;
}


export class GetAddRoleToDbClusterHeaders extends SpeakeasyBase {
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


export class GetAddRoleToDbClusterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAddRoleToDbClusterQueryParams;

  @SpeakeasyMetadata()
  headers: GetAddRoleToDbClusterHeaders;
}


export class GetAddRoleToDbClusterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
