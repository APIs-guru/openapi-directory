import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateServerEngineAttributesXAmzTargetEnum {
    OpsWorksCmV20161101UpdateServerEngineAttributes = "OpsWorksCM_V2016_11_01.UpdateServerEngineAttributes"
}


export class UpdateServerEngineAttributesHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateServerEngineAttributesXAmzTargetEnum;
}


export class UpdateServerEngineAttributesRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateServerEngineAttributesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateServerEngineAttributesRequest;
}


export class UpdateServerEngineAttributesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidStateException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateServerEngineAttributesResponse?: shared.UpdateServerEngineAttributesResponse;

  @Metadata()
  validationException?: any;
}
