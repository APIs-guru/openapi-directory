import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum RegisterEcsClusterXAmzTargetEnum {
    OpsWorks20130218RegisterEcsCluster = "OpsWorks_20130218.RegisterEcsCluster"
}


export class RegisterEcsClusterHeaders extends SpeakeasyBase {
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
  xAmzTarget: RegisterEcsClusterXAmzTargetEnum;
}


export class RegisterEcsClusterRequest extends SpeakeasyBase {
  @Metadata()
  headers: RegisterEcsClusterHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RegisterEcsClusterRequest;
}


export class RegisterEcsClusterResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  registerEcsClusterResult?: shared.RegisterEcsClusterResult;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
