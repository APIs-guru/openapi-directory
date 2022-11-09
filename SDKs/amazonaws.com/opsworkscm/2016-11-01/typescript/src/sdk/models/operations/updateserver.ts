import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateServerXAmzTargetEnum {
    OpsWorksCmV20161101UpdateServer = "OpsWorksCM_V2016_11_01.UpdateServer"
}


export class UpdateServerHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateServerXAmzTargetEnum;
}


export class UpdateServerRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateServerHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateServerRequest;
}


export class UpdateServerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidStateException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateServerResponse?: shared.UpdateServerResponse;

  @Metadata()
  validationException?: any;
}
