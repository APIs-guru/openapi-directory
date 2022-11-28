import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetRotateEncryptionKeyActionEnum {
    RotateEncryptionKey = "RotateEncryptionKey"
}

export enum GetRotateEncryptionKeyVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetRotateEncryptionKeyQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetRotateEncryptionKeyActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ClusterIdentifier" })
  clusterIdentifier: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetRotateEncryptionKeyVersionEnum;
}


export class GetRotateEncryptionKeyHeaders extends SpeakeasyBase {
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


export class GetRotateEncryptionKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetRotateEncryptionKeyQueryParams;

  @SpeakeasyMetadata()
  headers: GetRotateEncryptionKeyHeaders;
}


export class GetRotateEncryptionKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
