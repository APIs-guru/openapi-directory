import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DisassociateElasticIpXAmzTargetEnum {
    OpsWorks20130218DisassociateElasticIp = "OpsWorks_20130218.DisassociateElasticIp"
}


export class DisassociateElasticIpHeaders extends SpeakeasyBase {
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
  xAmzTarget: DisassociateElasticIpXAmzTargetEnum;
}


export class DisassociateElasticIpRequest extends SpeakeasyBase {
  @Metadata()
  headers: DisassociateElasticIpHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DisassociateElasticIpRequest;
}


export class DisassociateElasticIpResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
