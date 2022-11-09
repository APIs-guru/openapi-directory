import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum RestoreServerXAmzTargetEnum {
    OpsWorksCmV20161101RestoreServer = "OpsWorksCM_V2016_11_01.RestoreServer"
}


export class RestoreServerHeaders extends SpeakeasyBase {
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
  xAmzTarget: RestoreServerXAmzTargetEnum;
}


export class RestoreServerRequest extends SpeakeasyBase {
  @Metadata()
  headers: RestoreServerHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RestoreServerRequest;
}


export class RestoreServerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidStateException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  restoreServerResponse?: shared.RestoreServerResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
