import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDescribeHsmClientCertificatesActionEnum {
    DescribeHsmClientCertificates = "DescribeHsmClientCertificates"
}

export enum GetDescribeHsmClientCertificatesVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetDescribeHsmClientCertificatesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeHsmClientCertificatesActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=HsmClientCertificateIdentifier" })
  hsmClientCertificateIdentifier?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TagKeys" })
  tagKeys?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=TagValues" })
  tagValues?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeHsmClientCertificatesVersionEnum;
}


export class GetDescribeHsmClientCertificatesHeaders extends SpeakeasyBase {
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


export class GetDescribeHsmClientCertificatesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDescribeHsmClientCertificatesQueryParams;

  @Metadata()
  headers: GetDescribeHsmClientCertificatesHeaders;
}


export class GetDescribeHsmClientCertificatesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
