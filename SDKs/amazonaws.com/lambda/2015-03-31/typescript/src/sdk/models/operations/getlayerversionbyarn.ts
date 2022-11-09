import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetLayerVersionByArnFindEnum {
    LayerVersion = "LayerVersion"
}


export class GetLayerVersionByArnQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Arn" })
  arn: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=find" })
  find: GetLayerVersionByArnFindEnum;
}


export class GetLayerVersionByArnHeaders extends SpeakeasyBase {
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


export class GetLayerVersionByArnRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetLayerVersionByArnQueryParams;

  @Metadata()
  headers: GetLayerVersionByArnHeaders;
}


export class GetLayerVersionByArnResponse extends SpeakeasyBase {
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
