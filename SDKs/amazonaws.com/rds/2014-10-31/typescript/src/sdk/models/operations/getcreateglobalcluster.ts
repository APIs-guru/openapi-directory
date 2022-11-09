import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetCreateGlobalClusterActionEnum {
    CreateGlobalCluster = "CreateGlobalCluster"
}

export enum GetCreateGlobalClusterVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class GetCreateGlobalClusterQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCreateGlobalClusterActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DatabaseName" })
  databaseName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DeletionProtection" })
  deletionProtection?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Engine" })
  engine?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EngineVersion" })
  engineVersion?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=GlobalClusterIdentifier" })
  globalClusterIdentifier?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SourceDBClusterIdentifier" })
  sourceDbClusterIdentifier?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=StorageEncrypted" })
  storageEncrypted?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCreateGlobalClusterVersionEnum;
}


export class GetCreateGlobalClusterHeaders extends SpeakeasyBase {
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


export class GetCreateGlobalClusterRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCreateGlobalClusterQueryParams;

  @Metadata()
  headers: GetCreateGlobalClusterHeaders;
}


export class GetCreateGlobalClusterResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
