import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetAddRoleToDbInstanceActionEnum {
    AddRoleToDbInstance = "AddRoleToDBInstance"
}

export enum GetAddRoleToDbInstanceVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class GetAddRoleToDbInstanceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetAddRoleToDbInstanceActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBInstanceIdentifier" })
  dbInstanceIdentifier: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=FeatureName" })
  featureName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RoleArn" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetAddRoleToDbInstanceVersionEnum;
}


export class GetAddRoleToDbInstanceHeaders extends SpeakeasyBase {
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


export class GetAddRoleToDbInstanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAddRoleToDbInstanceQueryParams;

  @SpeakeasyMetadata()
  headers: GetAddRoleToDbInstanceHeaders;
}


export class GetAddRoleToDbInstanceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
