import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PutModelPackageGroupPolicyXAmzTargetEnum {
    SageMakerPutModelPackageGroupPolicy = "SageMaker.PutModelPackageGroupPolicy"
}


export class PutModelPackageGroupPolicyHeaders extends SpeakeasyBase {
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
  xAmzTarget: PutModelPackageGroupPolicyXAmzTargetEnum;
}


export class PutModelPackageGroupPolicyRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutModelPackageGroupPolicyHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PutModelPackageGroupPolicyInput;
}


export class PutModelPackageGroupPolicyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  putModelPackageGroupPolicyOutput?: shared.PutModelPackageGroupPolicyOutput;

  @Metadata()
  statusCode: number;
}
