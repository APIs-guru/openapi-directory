import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateFeatureGroupXAmzTargetEnum {
    SageMakerCreateFeatureGroup = "SageMaker.CreateFeatureGroup"
}


export class CreateFeatureGroupHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateFeatureGroupXAmzTargetEnum;
}


export class CreateFeatureGroupRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateFeatureGroupHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateFeatureGroupRequest;
}


export class CreateFeatureGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createFeatureGroupResponse?: shared.CreateFeatureGroupResponse;

  @Metadata()
  resourceInUse?: any;

  @Metadata()
  resourceLimitExceeded?: any;

  @Metadata()
  statusCode: number;
}
