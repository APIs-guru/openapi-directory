import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDeleteCustomAvailabilityZoneActionEnum {
    DeleteCustomAvailabilityZone = "DeleteCustomAvailabilityZone"
}

export enum GetDeleteCustomAvailabilityZoneVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class GetDeleteCustomAvailabilityZoneQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteCustomAvailabilityZoneActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CustomAvailabilityZoneId" })
  customAvailabilityZoneId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteCustomAvailabilityZoneVersionEnum;
}


export class GetDeleteCustomAvailabilityZoneHeaders extends SpeakeasyBase {
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


export class GetDeleteCustomAvailabilityZoneRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDeleteCustomAvailabilityZoneQueryParams;

  @SpeakeasyMetadata()
  headers: GetDeleteCustomAvailabilityZoneHeaders;
}


export class GetDeleteCustomAvailabilityZoneResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
