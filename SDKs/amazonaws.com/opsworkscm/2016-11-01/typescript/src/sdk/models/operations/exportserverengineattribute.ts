import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ExportServerEngineAttributeXAmzTargetEnum {
    OpsWorksCmV20161101ExportServerEngineAttribute = "OpsWorksCM_V2016_11_01.ExportServerEngineAttribute"
}


export class ExportServerEngineAttributeHeaders extends SpeakeasyBase {
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
  xAmzTarget: ExportServerEngineAttributeXAmzTargetEnum;
}


export class ExportServerEngineAttributeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ExportServerEngineAttributeHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ExportServerEngineAttributeRequest;
}


export class ExportServerEngineAttributeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  exportServerEngineAttributeResponse?: shared.ExportServerEngineAttributeResponse;

  @SpeakeasyMetadata()
  invalidStateException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationException?: any;
}
