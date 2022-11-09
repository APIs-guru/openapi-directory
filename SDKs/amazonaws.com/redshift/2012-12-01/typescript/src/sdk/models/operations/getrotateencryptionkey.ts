import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetRotateEncryptionKeyActionEnum {
    RotateEncryptionKey = "RotateEncryptionKey"
}

export enum GetRotateEncryptionKeyVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetRotateEncryptionKeyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetRotateEncryptionKeyActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ClusterIdentifier" })
  clusterIdentifier: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetRotateEncryptionKeyVersionEnum;
}


export class GetRotateEncryptionKeyHeaders extends SpeakeasyBase {
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


export class GetRotateEncryptionKeyRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRotateEncryptionKeyQueryParams;

  @Metadata()
  headers: GetRotateEncryptionKeyHeaders;
}


export class GetRotateEncryptionKeyResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
