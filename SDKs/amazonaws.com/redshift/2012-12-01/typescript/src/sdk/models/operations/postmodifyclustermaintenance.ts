import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostModifyClusterMaintenanceActionEnum {
    ModifyClusterMaintenance = "ModifyClusterMaintenance"
}

export enum PostModifyClusterMaintenanceVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class PostModifyClusterMaintenanceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostModifyClusterMaintenanceActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostModifyClusterMaintenanceVersionEnum;
}


export class PostModifyClusterMaintenanceHeaders extends SpeakeasyBase {
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


export class PostModifyClusterMaintenanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostModifyClusterMaintenanceQueryParams;

  @SpeakeasyMetadata()
  headers: PostModifyClusterMaintenanceHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostModifyClusterMaintenanceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
