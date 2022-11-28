import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDeleteHsmConfigurationActionEnum {
    DeleteHsmConfiguration = "DeleteHsmConfiguration"
}

export enum GetDeleteHsmConfigurationVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetDeleteHsmConfigurationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteHsmConfigurationActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=HsmConfigurationIdentifier" })
  hsmConfigurationIdentifier: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteHsmConfigurationVersionEnum;
}


export class GetDeleteHsmConfigurationHeaders extends SpeakeasyBase {
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


export class GetDeleteHsmConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDeleteHsmConfigurationQueryParams;

  @SpeakeasyMetadata()
  headers: GetDeleteHsmConfigurationHeaders;
}


export class GetDeleteHsmConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
