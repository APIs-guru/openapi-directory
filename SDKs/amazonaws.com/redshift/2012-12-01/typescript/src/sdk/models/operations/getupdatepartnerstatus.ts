import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetUpdatePartnerStatusActionEnum {
    UpdatePartnerStatus = "UpdatePartnerStatus"
}

export enum GetUpdatePartnerStatusStatusEnum {
    Active = "Active"
,    Inactive = "Inactive"
,    RuntimeFailure = "RuntimeFailure"
,    ConnectionFailure = "ConnectionFailure"
}

export enum GetUpdatePartnerStatusVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetUpdatePartnerStatusQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=AccountId" })
  accountId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetUpdatePartnerStatusActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ClusterIdentifier" })
  clusterIdentifier: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DatabaseName" })
  databaseName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PartnerName" })
  partnerName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status: GetUpdatePartnerStatusStatusEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=StatusMessage" })
  statusMessage?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetUpdatePartnerStatusVersionEnum;
}


export class GetUpdatePartnerStatusHeaders extends SpeakeasyBase {
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


export class GetUpdatePartnerStatusRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUpdatePartnerStatusQueryParams;

  @Metadata()
  headers: GetUpdatePartnerStatusHeaders;
}


export class GetUpdatePartnerStatusResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
