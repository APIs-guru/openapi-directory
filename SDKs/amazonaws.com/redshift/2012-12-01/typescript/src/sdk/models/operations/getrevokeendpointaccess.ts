import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetRevokeEndpointAccessActionEnum {
    RevokeEndpointAccess = "RevokeEndpointAccess"
}

export enum GetRevokeEndpointAccessVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetRevokeEndpointAccessQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Account" })
  account?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetRevokeEndpointAccessActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ClusterIdentifier" })
  clusterIdentifier?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Force" })
  force?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetRevokeEndpointAccessVersionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=VpcIds" })
  vpcIds?: string[];
}


export class GetRevokeEndpointAccessHeaders extends SpeakeasyBase {
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


export class GetRevokeEndpointAccessRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRevokeEndpointAccessQueryParams;

  @Metadata()
  headers: GetRevokeEndpointAccessHeaders;
}


export class GetRevokeEndpointAccessResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
