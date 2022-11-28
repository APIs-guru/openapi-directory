import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetRemoveRoleFromDbInstanceActionEnum {
    RemoveRoleFromDbInstance = "RemoveRoleFromDBInstance"
}

export enum GetRemoveRoleFromDbInstanceVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class GetRemoveRoleFromDbInstanceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetRemoveRoleFromDbInstanceActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBInstanceIdentifier" })
  dbInstanceIdentifier: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=FeatureName" })
  featureName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RoleArn" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetRemoveRoleFromDbInstanceVersionEnum;
}


export class GetRemoveRoleFromDbInstanceHeaders extends SpeakeasyBase {
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


export class GetRemoveRoleFromDbInstanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetRemoveRoleFromDbInstanceQueryParams;

  @SpeakeasyMetadata()
  headers: GetRemoveRoleFromDbInstanceHeaders;
}


export class GetRemoveRoleFromDbInstanceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
