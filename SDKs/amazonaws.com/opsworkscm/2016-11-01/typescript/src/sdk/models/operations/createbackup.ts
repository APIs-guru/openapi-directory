import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateBackupXAmzTargetEnum {
    OpsWorksCmV20161101CreateBackup = "OpsWorksCM_V2016_11_01.CreateBackup"
}


export class CreateBackupHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: CreateBackupXAmzTargetEnum;
}


export class CreateBackupRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateBackupHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateBackupRequest;
}


export class CreateBackupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createBackupResponse?: shared.CreateBackupResponse;

  @Metadata()
  invalidStateException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
