import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeletePartnerActionEnum {
    DeletePartner = "DeletePartner"
}

export enum GetDeletePartnerVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetDeletePartnerQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=AccountId" })
  accountId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeletePartnerActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ClusterIdentifier" })
  clusterIdentifier: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DatabaseName" })
  databaseName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PartnerName" })
  partnerName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeletePartnerVersionEnum;
}


export class GetDeletePartnerHeaders extends SpeakeasyBase {
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


export class GetDeletePartnerRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeletePartnerQueryParams;

  @Metadata()
  headers: GetDeletePartnerHeaders;
}


export class GetDeletePartnerResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
