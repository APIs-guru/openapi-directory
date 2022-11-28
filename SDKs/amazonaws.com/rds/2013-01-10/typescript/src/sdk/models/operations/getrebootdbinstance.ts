import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetRebootDbInstanceActionEnum {
    RebootDbInstance = "RebootDBInstance"
}

export enum GetRebootDbInstanceVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}


export class GetRebootDbInstanceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetRebootDbInstanceActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBInstanceIdentifier" })
  dbInstanceIdentifier: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ForceFailover" })
  forceFailover?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetRebootDbInstanceVersionEnum;
}


export class GetRebootDbInstanceHeaders extends SpeakeasyBase {
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


export class GetRebootDbInstanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetRebootDbInstanceQueryParams;

  @SpeakeasyMetadata()
  headers: GetRebootDbInstanceHeaders;
}


export class GetRebootDbInstanceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
