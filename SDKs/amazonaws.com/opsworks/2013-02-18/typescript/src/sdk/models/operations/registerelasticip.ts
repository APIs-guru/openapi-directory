import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum RegisterElasticIpXAmzTargetEnum {
    OpsWorks20130218RegisterElasticIp = "OpsWorks_20130218.RegisterElasticIp"
}


export class RegisterElasticIpHeaders extends SpeakeasyBase {
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
  xAmzTarget: RegisterElasticIpXAmzTargetEnum;
}


export class RegisterElasticIpRequest extends SpeakeasyBase {
  @Metadata()
  headers: RegisterElasticIpHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RegisterElasticIpRequest;
}


export class RegisterElasticIpResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  registerElasticIpResult?: shared.RegisterElasticIpResult;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
