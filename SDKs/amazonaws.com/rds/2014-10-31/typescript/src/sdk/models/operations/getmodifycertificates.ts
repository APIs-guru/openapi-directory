import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetModifyCertificatesActionEnum {
    ModifyCertificates = "ModifyCertificates"
}

export enum GetModifyCertificatesVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class GetModifyCertificatesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyCertificatesActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=CertificateIdentifier" })
  certificateIdentifier?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=RemoveCustomerOverride" })
  removeCustomerOverride?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyCertificatesVersionEnum;
}


export class GetModifyCertificatesHeaders extends SpeakeasyBase {
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


export class GetModifyCertificatesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetModifyCertificatesQueryParams;

  @Metadata()
  headers: GetModifyCertificatesHeaders;
}


export class GetModifyCertificatesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
