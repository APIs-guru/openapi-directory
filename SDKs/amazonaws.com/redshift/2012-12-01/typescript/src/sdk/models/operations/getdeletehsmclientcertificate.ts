import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeleteHsmClientCertificateActionEnum {
    DeleteHsmClientCertificate = "DeleteHsmClientCertificate"
}

export enum GetDeleteHsmClientCertificateVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetDeleteHsmClientCertificateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteHsmClientCertificateActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=HsmClientCertificateIdentifier" })
  hsmClientCertificateIdentifier: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteHsmClientCertificateVersionEnum;
}


export class GetDeleteHsmClientCertificateHeaders extends SpeakeasyBase {
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


export class GetDeleteHsmClientCertificateRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeleteHsmClientCertificateQueryParams;

  @Metadata()
  headers: GetDeleteHsmClientCertificateHeaders;
}


export class GetDeleteHsmClientCertificateResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
