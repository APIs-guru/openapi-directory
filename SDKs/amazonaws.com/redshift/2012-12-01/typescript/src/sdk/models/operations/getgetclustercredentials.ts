import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetGetClusterCredentialsActionEnum {
    GetClusterCredentials = "GetClusterCredentials"
}

export enum GetGetClusterCredentialsVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetGetClusterCredentialsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetClusterCredentialsActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AutoCreate" })
  autoCreate?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ClusterIdentifier" })
  clusterIdentifier: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DbGroups" })
  dbGroups?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DbName" })
  dbName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DbUser" })
  dbUser: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DurationSeconds" })
  durationSeconds?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetClusterCredentialsVersionEnum;
}


export class GetGetClusterCredentialsHeaders extends SpeakeasyBase {
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


export class GetGetClusterCredentialsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGetClusterCredentialsQueryParams;

  @SpeakeasyMetadata()
  headers: GetGetClusterCredentialsHeaders;
}


export class GetGetClusterCredentialsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
