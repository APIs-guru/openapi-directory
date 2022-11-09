import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetPromoteReadReplicaActionEnum {
    PromoteReadReplica = "PromoteReadReplica"
}

export enum GetPromoteReadReplicaVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class GetPromoteReadReplicaQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetPromoteReadReplicaActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=BackupRetentionPeriod" })
  backupRetentionPeriod?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DBInstanceIdentifier" })
  dbInstanceIdentifier: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PreferredBackupWindow" })
  preferredBackupWindow?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetPromoteReadReplicaVersionEnum;
}


export class GetPromoteReadReplicaHeaders extends SpeakeasyBase {
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


export class GetPromoteReadReplicaRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPromoteReadReplicaQueryParams;

  @Metadata()
  headers: GetPromoteReadReplicaHeaders;
}


export class GetPromoteReadReplicaResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
