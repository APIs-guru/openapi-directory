import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum RestoreServerXAmzTargetEnum {
    OpsWorksCmV20161101RestoreServer = "OpsWorksCM_V2016_11_01.RestoreServer"
}


export class RestoreServerHeaders extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: RestoreServerXAmzTargetEnum;
}


export class RestoreServerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: RestoreServerHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.RestoreServerRequest;
}


export class RestoreServerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidStateException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  restoreServerResponse?: shared.RestoreServerResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationException?: any;
}
