import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetUpdatePartnerStatusActionEnum {
    UpdatePartnerStatus = "UpdatePartnerStatus"
}

export enum GetUpdatePartnerStatusStatusEnum {
    Active = "Active",
    Inactive = "Inactive",
    RuntimeFailure = "RuntimeFailure",
    ConnectionFailure = "ConnectionFailure"
}

export enum GetUpdatePartnerStatusVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetUpdatePartnerStatusQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AccountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetUpdatePartnerStatusActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ClusterIdentifier" })
  clusterIdentifier: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DatabaseName" })
  databaseName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PartnerName" })
  partnerName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status: GetUpdatePartnerStatusStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=StatusMessage" })
  statusMessage?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetUpdatePartnerStatusVersionEnum;
}


export class GetUpdatePartnerStatusHeaders extends SpeakeasyBase {
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


export class GetUpdatePartnerStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetUpdatePartnerStatusQueryParams;

  @SpeakeasyMetadata()
  headers: GetUpdatePartnerStatusHeaders;
}


export class GetUpdatePartnerStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
