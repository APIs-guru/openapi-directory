import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetAddPartnerActionEnum {
    AddPartner = "AddPartner"
}

export enum GetAddPartnerVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetAddPartnerQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=AccountId" })
  accountId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetAddPartnerActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ClusterIdentifier" })
  clusterIdentifier: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DatabaseName" })
  databaseName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PartnerName" })
  partnerName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetAddPartnerVersionEnum;
}


export class GetAddPartnerHeaders extends SpeakeasyBase {
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


export class GetAddPartnerRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAddPartnerQueryParams;

  @Metadata()
  headers: GetAddPartnerHeaders;
}


export class GetAddPartnerResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
