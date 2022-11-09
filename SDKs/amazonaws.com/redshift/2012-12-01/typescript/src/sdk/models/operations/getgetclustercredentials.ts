import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetGetClusterCredentialsActionEnum {
    GetClusterCredentials = "GetClusterCredentials"
}

export enum GetGetClusterCredentialsVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetGetClusterCredentialsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetClusterCredentialsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AutoCreate" })
  autoCreate?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ClusterIdentifier" })
  clusterIdentifier: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DbGroups" })
  dbGroups?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=DbName" })
  dbName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DbUser" })
  dbUser: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DurationSeconds" })
  durationSeconds?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetClusterCredentialsVersionEnum;
}


export class GetGetClusterCredentialsHeaders extends SpeakeasyBase {
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


export class GetGetClusterCredentialsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGetClusterCredentialsQueryParams;

  @Metadata()
  headers: GetGetClusterCredentialsHeaders;
}


export class GetGetClusterCredentialsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
