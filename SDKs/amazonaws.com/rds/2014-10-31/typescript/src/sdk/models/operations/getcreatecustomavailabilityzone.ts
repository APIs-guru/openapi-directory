import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetCreateCustomAvailabilityZoneActionEnum {
    CreateCustomAvailabilityZone = "CreateCustomAvailabilityZone"
}

export enum GetCreateCustomAvailabilityZoneVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class GetCreateCustomAvailabilityZoneQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCreateCustomAvailabilityZoneActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=CustomAvailabilityZoneName" })
  customAvailabilityZoneName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ExistingVpnId" })
  existingVpnId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NewVpnTunnelName" })
  newVpnTunnelName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCreateCustomAvailabilityZoneVersionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=VpnTunnelOriginatorIP" })
  vpnTunnelOriginatorIp?: string;
}


export class GetCreateCustomAvailabilityZoneHeaders extends SpeakeasyBase {
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


export class GetCreateCustomAvailabilityZoneRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCreateCustomAvailabilityZoneQueryParams;

  @Metadata()
  headers: GetCreateCustomAvailabilityZoneHeaders;
}


export class GetCreateCustomAvailabilityZoneResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
