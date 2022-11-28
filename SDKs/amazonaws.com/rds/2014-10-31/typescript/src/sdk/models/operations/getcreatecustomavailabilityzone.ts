import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetCreateCustomAvailabilityZoneActionEnum {
    CreateCustomAvailabilityZone = "CreateCustomAvailabilityZone"
}

export enum GetCreateCustomAvailabilityZoneVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class GetCreateCustomAvailabilityZoneQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCreateCustomAvailabilityZoneActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CustomAvailabilityZoneName" })
  customAvailabilityZoneName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ExistingVpnId" })
  existingVpnId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NewVpnTunnelName" })
  newVpnTunnelName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCreateCustomAvailabilityZoneVersionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VpnTunnelOriginatorIP" })
  vpnTunnelOriginatorIp?: string;
}


export class GetCreateCustomAvailabilityZoneHeaders extends SpeakeasyBase {
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


export class GetCreateCustomAvailabilityZoneRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCreateCustomAvailabilityZoneQueryParams;

  @SpeakeasyMetadata()
  headers: GetCreateCustomAvailabilityZoneHeaders;
}


export class GetCreateCustomAvailabilityZoneResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
