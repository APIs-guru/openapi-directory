import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum SetTimeBasedAutoScalingXAmzTargetEnum {
    OpsWorks20130218SetTimeBasedAutoScaling = "OpsWorks_20130218.SetTimeBasedAutoScaling"
}


export class SetTimeBasedAutoScalingHeaders extends SpeakeasyBase {
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
  xAmzTarget: SetTimeBasedAutoScalingXAmzTargetEnum;
}


export class SetTimeBasedAutoScalingRequest extends SpeakeasyBase {
  @Metadata()
  headers: SetTimeBasedAutoScalingHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SetTimeBasedAutoScalingRequest;
}


export class SetTimeBasedAutoScalingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
