import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetLayerVersionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=LayerName" })
  layerName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=VersionNumber" })
  versionNumber: number;
}


export class GetLayerVersionHeaders extends SpeakeasyBase {
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


export class GetLayerVersionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetLayerVersionPathParams;

  @Metadata()
  headers: GetLayerVersionHeaders;
}


export class GetLayerVersionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getLayerVersionResponse?: shared.GetLayerVersionResponse;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
