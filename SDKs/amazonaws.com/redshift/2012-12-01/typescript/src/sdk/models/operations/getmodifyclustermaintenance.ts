import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetModifyClusterMaintenanceActionEnum {
    ModifyClusterMaintenance = "ModifyClusterMaintenance"
}

export enum GetModifyClusterMaintenanceVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetModifyClusterMaintenanceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyClusterMaintenanceActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ClusterIdentifier" })
  clusterIdentifier: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DeferMaintenance" })
  deferMaintenance?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DeferMaintenanceDuration" })
  deferMaintenanceDuration?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DeferMaintenanceEndTime" })
  deferMaintenanceEndTime?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DeferMaintenanceIdentifier" })
  deferMaintenanceIdentifier?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DeferMaintenanceStartTime" })
  deferMaintenanceStartTime?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyClusterMaintenanceVersionEnum;
}


export class GetModifyClusterMaintenanceHeaders extends SpeakeasyBase {
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


export class GetModifyClusterMaintenanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetModifyClusterMaintenanceQueryParams;

  @SpeakeasyMetadata()
  headers: GetModifyClusterMaintenanceHeaders;
}


export class GetModifyClusterMaintenanceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
