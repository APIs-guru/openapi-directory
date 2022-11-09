import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ExportServerEngineAttributeXAmzTargetEnum {
    OpsWorksCmV20161101ExportServerEngineAttribute = "OpsWorksCM_V2016_11_01.ExportServerEngineAttribute"
}


export class ExportServerEngineAttributeHeaders extends SpeakeasyBase {
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
  xAmzTarget: ExportServerEngineAttributeXAmzTargetEnum;
}


export class ExportServerEngineAttributeRequest extends SpeakeasyBase {
  @Metadata()
  headers: ExportServerEngineAttributeHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ExportServerEngineAttributeRequest;
}


export class ExportServerEngineAttributeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  exportServerEngineAttributeResponse?: shared.ExportServerEngineAttributeResponse;

  @Metadata()
  invalidStateException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
