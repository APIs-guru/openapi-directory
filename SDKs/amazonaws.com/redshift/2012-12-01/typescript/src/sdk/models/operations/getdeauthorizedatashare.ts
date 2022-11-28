import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDeauthorizeDataShareActionEnum {
    DeauthorizeDataShare = "DeauthorizeDataShare"
}

export enum GetDeauthorizeDataShareVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetDeauthorizeDataShareQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeauthorizeDataShareActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ConsumerIdentifier" })
  consumerIdentifier: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DataShareArn" })
  dataShareArn: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeauthorizeDataShareVersionEnum;
}


export class GetDeauthorizeDataShareHeaders extends SpeakeasyBase {
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


export class GetDeauthorizeDataShareRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDeauthorizeDataShareQueryParams;

  @SpeakeasyMetadata()
  headers: GetDeauthorizeDataShareHeaders;
}


export class GetDeauthorizeDataShareResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
